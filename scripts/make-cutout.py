# -*- coding: utf-8 -*-
"""
Détoure le portrait d'Honoré et produit les visuels utilisés par le site.

    python scripts/make-cutout.py

Produit :
  assets/honore-cutout.webp   portrait détouré, fond transparent (hero + à propos)
  public/og.jpg               image de partage 1200 x 630

Le sujet n'est jamais recadré : seul le fond est retiré. La hauteur de l'image
est conservée intégralement, de la tête jusqu'au bas du cadre d'origine.
"""

from __future__ import annotations

import io
import os
import sys

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE = os.path.join(ROOT, "assets", "source", "honore-portrait.jpg")
CUTOUT = os.path.join(ROOT, "assets", "honore-cutout.webp")
OG = os.path.join(ROOT, "public", "og.jpg")


def load_source() -> Image.Image:
    if not os.path.exists(SOURCE):
        sys.exit(f"Photo source introuvable : {SOURCE}")
    return Image.open(SOURCE).convert("RGB")


def remove_background(image: Image.Image) -> Image.Image:
    """Détourage via rembg (modèle u2net). Renvoie une image RGBA."""
    try:
        from rembg import new_session, remove
    except ImportError:
        sys.exit("rembg est requis :  python -m pip install rembg onnxruntime")

    session = new_session("u2net_human_seg")
    cut = remove(
        image,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=248,
        alpha_matting_background_threshold=12,
        alpha_matting_erode_size=4,
    ).convert("RGBA")

    # Adoucit très légèrement le contour pour éviter l'effet « découpé aux ciseaux ».
    alpha = cut.getchannel("A").filter(ImageFilter.GaussianBlur(0.6))
    cut.putalpha(alpha)
    return cut


def trim_transparent(image: Image.Image, padding: int = 6) -> Image.Image:
    """Retire les bandes entièrement transparentes autour du sujet."""
    bbox = image.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    if not bbox:
        return image
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(image.width, right + padding)
    bottom = min(image.height, bottom + padding)
    return image.crop((left, top, right, bottom))


def build_cutout() -> Image.Image:
    source = load_source()
    source = ImageEnhance.Color(ImageEnhance.Contrast(source).enhance(1.06)).enhance(1.05)

    cut = remove_background(source)
    cut = trim_transparent(cut)

    # Largeur d'affichage maximale sur le site : 1100 px suffit largement.
    if cut.width > 1100:
        height = round(cut.height * 1100 / cut.width)
        cut = cut.resize((1100, height), Image.LANCZOS)

    os.makedirs(os.path.dirname(CUTOUT), exist_ok=True)
    cut.save(CUTOUT, "WEBP", quality=88, method=6, exact=True)
    print(f"cutout   {cut.size}  {os.path.getsize(CUTOUT) // 1024} Ko")
    return cut


def build_og(cut: Image.Image) -> None:
    """Image de partage : le sujet détouré sur le disque rouge de la marque."""
    W, H = 1200, 630
    canvas = Image.new("RGB", (W, H), (6, 7, 10))

    # halo rouge diffus
    glow = Image.new("RGB", (W, H), (6, 7, 10))
    ImageDraw.Draw(glow).ellipse([690, -170, 1310, 520], fill=(168, 14, 38))
    canvas = ImageChops.lighter(canvas, glow.filter(ImageFilter.GaussianBlur(120)))

    # disque de marque
    disc = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(disc).ellipse([800, 60, 1190, 450], fill=(196, 16, 44, 255))
    disc = disc.filter(ImageFilter.GaussianBlur(0.8))
    canvas = Image.alpha_composite(canvas.convert("RGBA"), disc).convert("RGB")

    # sujet : hauteur pleine, jamais rogné
    subject = cut.copy()
    target_h = 600
    subject = subject.resize(
        (round(subject.width * target_h / subject.height), target_h), Image.LANCZOS
    )
    canvas.paste(subject, (W - subject.width - 60, H - target_h), subject)

    draw = ImageDraw.Draw(canvas)
    fonts = r"C:\Windows\Fonts"

    def font(name: str, size: int):
        try:
            from PIL import ImageFont

            return ImageFont.truetype(os.path.join(fonts, name), size)
        except OSError:
            from PIL import ImageFont

            return ImageFont.load_default()

    x = 72
    draw.text((x, 92), "LE MENTOR DES MENTORS", font=font("segoeuib.ttf", 21), fill=(230, 199, 154))
    draw.rectangle([x, 124, x + 56, 126], fill=(225, 20, 51))

    big = font("segoeuib.ttf", 58)
    draw.text((x, 168), "Tu peux rester", font=big, fill=(247, 248, 250))
    draw.text((x, 238), "une poule.", font=big, fill=(130, 134, 142))
    box = draw.textbbox((x, 238), "une poule.", font=big)
    mid = (box[1] + box[3]) // 2
    draw.line([box[0] - 4, mid + 4, box[2] - 16, mid - 4], fill=(225, 20, 51), width=6)
    draw.text((x, 308), "Ou apprendre", font=big, fill=(247, 248, 250))
    draw.text((x, 378), "à voler.", font=big, fill=(255, 46, 77))

    draw.text(
        (x, 486),
        "Idée rentable · Financement sans banque · Mindset",
        font=font("segoeui.ttf", 24),
        fill=(180, 184, 192),
    )
    draw.text(
        (x, 528),
        "HONORÉ SODOKIN — 90 JOURS CHRONO",
        font=font("segoeuib.ttf", 20),
        fill=(230, 199, 154),
    )

    os.makedirs(os.path.dirname(OG), exist_ok=True)
    canvas.save(OG, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"og.jpg   {canvas.size}  {os.path.getsize(OG) // 1024} Ko")


if __name__ == "__main__":
    build_og(build_cutout())
