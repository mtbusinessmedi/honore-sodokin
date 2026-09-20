import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { phases } from "@/lib/content";

export function Method() {
  return (
    <section
      id="methode"
      className="border-y border-hairline bg-[linear-gradient(180deg,var(--color-coal),#080a0e)] py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="La méthode"
            title="90 jours,"
            accent="quatre phases"
            after=", zéro improvisation."
            subtitle="Chaque phase a un livrable. Si le livrable n'est pas là, on ne passe pas à la suivante."
            className="mb-14"
          />
        </Reveal>

        <ol>
          {phases.map((phase, index) => (
            <li
              key={phase.when}
              className={`border-t border-hairline ${
                index === phases.length - 1 ? "border-b" : ""
              }`}
            >
              <Reveal
                delay={index * 90}
                className="grid gap-4 py-8 md:grid-cols-[150px_1fr] md:gap-10"
              >
                <div className="pt-1.5 font-display text-[13px] font-extrabold tracking-[0.16em] text-flame uppercase">
                  {phase.when}
                </div>
                <div>
                  <h3 className="mb-3 text-[23px]">{phase.title}</h3>
                  <p className="max-w-[680px] text-[15.6px] text-paper/70">{phase.body}</p>
                  <p className="mt-4 text-[13.5px] font-semibold text-sand">
                    Livrable — {phase.deliverable}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
