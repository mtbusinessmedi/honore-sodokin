import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="programme" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Le programme"
            title="Trois piliers."
            accent="Aucun n'est optionnel."
            subtitle="Un business qui tient debout repose sur une idée rentable, un capital accessible et une tête solide. Enlève-en un, tout s'écroule."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 110} className="h-full">
              <article className="notch h-full bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] px-8 py-9 shadow-[inset_0_0_0_1px_var(--color-hairline)] transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_rgba(255,46,77,0.42)]">
                <div className="hex mb-6 grid h-14 w-14 place-items-center bg-[linear-gradient(140deg,var(--color-brand),var(--color-blood))] font-display text-[17px] font-extrabold text-white">
                  {pillar.number}
                </div>

                <h3 className="mb-3.5 text-[21px]">{pillar.title}</h3>
                <p className="text-[15.4px] text-paper/70">{pillar.intro}</p>

                <ul className="mt-5 grid gap-2.5 border-t border-hairline pt-[18px]">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[14px] text-paper/50">
                      <span className="text-brand" aria-hidden="true">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
