import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { audienceNo, audienceYes } from "@/lib/content";

function List({
  title,
  items,
  positive,
}: {
  title: string;
  items: string[];
  positive: boolean;
}) {
  return (
    <article className="notch h-full bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] px-8 py-9 shadow-[inset_0_0_0_1px_var(--color-hairline)]">
      <h3 className="mb-5 flex items-center gap-3 text-[20px]">
        <span
          aria-hidden="true"
          className={`hex grid h-[26px] w-[26px] place-items-center text-[13px] ${
            positive
              ? "bg-[linear-gradient(140deg,var(--color-brand),var(--color-flame))] text-white"
              : "bg-white/10 text-paper/50"
          }`}
        >
          {positive ? "✓" : "✕"}
        </span>
        {title}
      </h3>

      <ul className="grid gap-3.5">
        {items.map((item) => (
          <li key={item} className="relative pl-[22px] text-[15.4px] text-paper/70">
            <span
              aria-hidden="true"
              className={`absolute top-[10px] left-0 h-[7px] w-[7px] rotate-45 ${
                positive ? "bg-brand" : "bg-white/20"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Audience() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Sélection"
            title="Je ne prends pas"
            accent="tout le monde"
            after="."
            subtitle="L'accompagnement est exigeant et limité en places. Autant être clair dès maintenant."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <List title="C'est pour toi si…" items={audienceYes} positive />
          </Reveal>
          <Reveal delay={120} className="h-full">
            <List title="Ce n'est pas pour toi si…" items={audienceNo} positive={false} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
