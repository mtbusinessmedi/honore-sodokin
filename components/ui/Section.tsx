import type { ReactNode } from "react";

/** Conteneur centré, marges latérales cohérentes sur toute la page. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative z-2 mx-auto w-full max-w-[1200px] px-5 md:px-[34px] ${className}`}>
      {children}
    </div>
  );
}

/** Surtitre : filet dégradé + libellé sable en petites capitales. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-[11.5px] font-bold tracking-[0.22em] text-sand uppercase">
      <span className="h-px w-[26px] bg-[linear-gradient(90deg,var(--color-brand),var(--color-sand))]" />
      {children}
    </span>
  );
}

/**
 * Titre de section. `accent` est rendu en serif italique rouge,
 * pour la touche éditoriale premium.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  after,
  subtitle,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  after?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px] ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-[18px] text-[clamp(28px,4.2vw,50px)]">
        {title}
        {accent ? (
          <>
            {" "}
            <em className="font-serif text-flame font-normal tracking-normal italic">
              {accent}
            </em>
          </>
        ) : null}
        {after}
      </h2>
      {subtitle ? (
        <p className={`mt-[18px] max-w-[620px] text-[17px] text-paper/70 ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
