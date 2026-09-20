import { BookingButton } from "@/components/booking/BookingButton";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Section";
import { offerIncludes, offerSteps } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

export function Offer() {
  return (
    <section
      id="offre"
      className="border-y border-hairline bg-[linear-gradient(180deg,var(--color-coal),#080a0e)] py-20 md:py-28"
    >
      <Container>
        <div className="grid items-start gap-11 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[60px]">
          <Reveal>
            <SectionHeading
              eyebrow="Passer à l'action"
              title="Trois étapes pour"
              accent="décoller"
              after="."
              subtitle="Le premier échange est gratuit et sans engagement. Son seul objectif : savoir si tu es au bon endroit."
            />

            <div className="mt-8 grid gap-[18px]">
              {offerSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="hex grid h-[42px] w-[42px] shrink-0 place-items-center bg-white/5 font-display text-[15px] font-extrabold shadow-[inset_0_0_0_1px_var(--color-hairline-strong)]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-[17px]">{step.title}</h3>
                    <p className="text-[15px] text-paper/70">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="notch-lg bg-[linear-gradient(165deg,rgba(225,20,51,0.14),rgba(255,255,255,0.02))] px-8 py-9 shadow-[inset_0_0_0_1px_rgba(255,46,77,0.3)]">
              <Eyebrow>Première étape</Eyebrow>
              <h3 className="mt-3.5 text-[23px]">Appel de clarté</h3>

              <p className="mt-4 font-display text-[34px] font-extrabold">Offert</p>
              <p className="mt-1.5 text-[13px] text-paper/50">
                30 minutes · sans engagement · places limitées chaque semaine
              </p>

              <ul className="mt-6 grid gap-3.5 border-t border-white/15 pt-[22px]">
                {offerIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-paper/70">
                    <span className="font-bold text-flame" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <BookingButton className="mt-8 w-full">Réserver mon appel</BookingButton>

              <p className="mt-3.5 text-center text-[12.5px] text-paper/50">
                Ou écris directement au{" "}
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand underline-offset-4 hover:underline"
                >
                  {site.whatsappDisplay}
                </a>
              </p>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
