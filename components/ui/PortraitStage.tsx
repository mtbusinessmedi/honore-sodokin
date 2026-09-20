import Image from "next/image";
import cutout from "@/assets/honore-cutout.webp";
import { site } from "@/lib/site";

type Variant = "hero" | "about";

/**
 * Mise en scène du portrait détouré, façon affiche.
 *
 * Géométrie : le disque occupe toute la largeur du cadre, le sujet mesure
 * 103 % de la hauteur — il est donc plus haut que le disque (la tête dépasse
 * au-dessus du cercle) tout en restant plus étroit que lui (le rouge reste
 * visible de part et d'autre). Tous les éléments graphiques sont posés
 * derrière le sujet : l'image n'est ni recadrée, ni recouverte.
 */
export function PortraitStage({
  variant = "hero",
  priority = false,
  className = "",
}: {
  variant?: Variant;
  priority?: boolean;
  className?: string;
}) {
  const isHero = variant === "hero";

  return (
    <div className={`relative aspect-[1/1.18] w-full ${className}`}>
      {/* halo diffus */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-14%] left-1/2 aspect-square w-[138%] -translate-x-1/2 rounded-full blur-[80px] ${
          isHero
            ? "bg-[radial-gradient(circle,rgba(225,20,51,0.5),transparent_60%)]"
            : "bg-[radial-gradient(circle,rgba(225,20,51,0.28),transparent_62%)]"
        }`}
      />

      {/* anneau pointillé */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6%] left-1/2 aspect-square w-[124%] -translate-x-1/2 rounded-full border border-dashed border-white/[0.07]"
      />

      {/* anneau fin */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1.5%] left-1/2 aspect-square w-[116%] -translate-x-1/2 rounded-full border border-white/10"
      />

      {/* disque de marque */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[2%] left-1/2 aspect-square w-[108%] -translate-x-1/2 rounded-full ${
          isHero
            ? "bg-[radial-gradient(circle_at_32%_24%,#f0203f_0%,#c1102c_44%,#7d0b20_76%,#48060f_100%)] shadow-[0_50px_140px_-40px_rgba(225,20,51,0.7)]"
            : "bg-[radial-gradient(circle_at_32%_24%,#a50f27_0%,#6d0a1c_55%,#2a040d_100%)]"
        }`}
      />

      {/* trame fine sur le bas du disque */}
      <div
        aria-hidden="true"
        className="hatch pointer-events-none absolute bottom-[6%] left-1/2 aspect-[3/1] w-[58%] -translate-x-1/2 opacity-25 [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_72%)]"
      />

      {/* sujet détouré : image entière, aucun recadrage */}
      <div className="absolute bottom-[2%] left-1/2 h-[103%] -translate-x-1/2">
        <Image
          src={cutout}
          alt={isHero ? `${site.name}, ${site.role.toLowerCase()}` : `Portrait de ${site.name}`}
          priority={priority}
          className="h-full w-auto max-w-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
        />
      </div>

      {/* ombre portée au sol */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1%] left-1/2 h-[8%] w-[58%] -translate-x-1/2 rounded-[50%] bg-void blur-lg"
      />
    </div>
  );
}
