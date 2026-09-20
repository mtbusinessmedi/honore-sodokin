import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { after, before, type ComparisonSide } from "@/lib/content";

function Panel({ side, variant }: { side: ComparisonSide; variant: "before" | "after" }) {
  const isAfter = variant === "after";

  return (
    <article
      className={`notch h-full px-8 py-9 ${
        isAfter
          ? "bg-[linear-gradient(165deg,rgba(225,20,51,0.11),rgba(255,255,255,0.02))] shadow-[inset_0_0_0_1px_rgba(255,46,77,0.34)]"
          : "bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] shadow-[inset_0_0_0_1px_var(--color-hairline)]"
      }`}
    >
      <span
        className={`notch-sm inline-block px-4 py-2 font-display text-[11.5px] font-bold tracking-[0.18em] uppercase ${
          isAfter
            ? "bg-[linear-gradient(110deg,var(--color-brand),var(--color-blood))] text-white"
            : "bg-white/8 text-paper/50"
        }`}
      >
        {side.tag}
      </span>

      <h3 className="mt-6 mb-5 text-[22px]">{side.title}</h3>

      <ul className="grid gap-3.5">
        {side.items.map((item) => (
          <li key={item} className="flex items-start gap-3.5 text-[15.4px] text-paper/70">
            <span
              className={`hex mt-1 grid h-[19px] w-[19px] shrink-0 place-items-center text-[11px] font-bold ${
                isAfter
                  ? "bg-[linear-gradient(140deg,var(--color-brand),var(--color-flame))] text-white"
                  : "bg-white/10 text-paper/50"
              }`}
              aria-hidden="true"
            >
              {isAfter ? "✓" : "✕"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BeforeAfter() {
  return (
    <section className="border-y border-hairline bg-[linear-gradient(180deg,var(--color-coal),#080a0e)] py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="La bascule"
            title="Avant. Puis"
            accent="après 90 jours"
            after="."
            subtitle="La même personne. Le même marché. Le même capital de départ. Seule la méthode change."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <Panel side={before} variant="before" />
          </Reveal>
          <Reveal delay={120} className="h-full">
            <Panel side={after} variant="after" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
