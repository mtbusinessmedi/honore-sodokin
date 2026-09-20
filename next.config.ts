import type { NextConfig } from "next";

/**
 * Le site est 100 % statique : `next build` produit un dossier `out/`
 * déployable tel quel sur Vercel, GitHub Pages ou n'importe quel hébergeur.
 *
 * NEXT_PUBLIC_BASE_PATH sert uniquement quand le site est servi depuis un
 * sous-chemin (ex. GitHub Pages : /mon-repo). Vide par défaut.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // L'optimisation à la volée demande un serveur : les images sont
    // déjà compressées en WebP à la source.
    unoptimized: true,
  },
};

export default nextConfig;
