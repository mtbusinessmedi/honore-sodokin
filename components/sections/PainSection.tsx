import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pains } from "@/lib/content";

export function PainSection() {
  return (
    <section id="constat" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-11 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[60px]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Le constat"
                title="Cette histoire,"
                accent="tu la connais"
                after="."
                className="mb-10"
              />
            </Reveal>

            <div className="grid gap-4">
              {pains.map((pain, index) => (
                <Reveal key={pain.quote} delay={index * 80}>
                  <div className="notch-sm flex items-start gap-[18px] bg-white/3 px-6 py-5 shadow-[inset_0_0_0_1px_var(--color-hairline)]">
                    <span className="font-serif text-[40px] leading-[0.8] text-brand">“</span>
                    <p className="text-[15.5px] text-paper/70 italic">{pain.quote}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="grid gap-5">
              <p className="text-paper/70">
                Je n&apos;invente rien. Ce sont les messages que je reçois{" "}
                <b className="font-semibold text-paper">chaque semaine</b> de jeunes qui ont
                l&apos;énergie, l&apos;intelligence et la faim — mais personne pour leur montrer
                l&apos;ordre des opérations.
              </p>
              <p className="text-paper/70">
                Le problème n&apos;est presque jamais le talent. C&apos;est la{" "}
                <b className="font-semibold text-paper">méthode</b> : on cherche un financement
                avant d&apos;avoir validé une idée, on copie un business sans comprendre ses marges,
                on veut aller vite sans avoir la tête pour tenir.
              </p>
              <p className="text-paper/70">
                Résultat : beaucoup d&apos;efforts, peu de traction, et cette impression de courir
                sur place pendant que les années passent.
              </p>

              <div className="notch mt-3 bg-[linear-gradient(140deg,rgba(225,20,51,0.16),transparent)] px-[26px] py-6 shadow-[inset_0_0_0_1px_rgba(225,20,51,0.35)]">
                <p className="font-display text-[17px] leading-snug font-bold">
                  Ce n&apos;est pas un problème de chance. C&apos;est un problème de séquence — et
                  une séquence, ça s&apos;apprend.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
