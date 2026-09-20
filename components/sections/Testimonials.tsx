import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { testimonials, testimonialsArePlaceholders } from "@/lib/content";

/**
 * ⚠️ Les témoignages de `lib/content.ts` sont des exemples de mise en page.
 * À remplacer par de vrais retours clients — ou retirer la section — avant la mise en ligne.
 */
export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Retours"
            title="Ils ont arrêté"
            accent="d'attendre"
            after="."
            subtitle={
              testimonialsArePlaceholders
                ? "Exemples de mise en page — à remplacer par de vrais témoignages avant la mise en ligne."
                : undefined
            }
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 110} className="h-full">
              <figure
                data-placeholder={testimonialsArePlaceholders || undefined}
                className="notch h-full bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] px-8 py-9 shadow-[inset_0_0_0_1px_var(--color-hairline)]"
              >
                <div className="mb-4 text-[13px] tracking-[3px] text-sand" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote className="text-[15.6px] text-paper/70 italic">
                  « {testimonial.quote} »
                </blockquote>
                <figcaption className="mt-[22px] border-t border-hairline pt-[18px]">
                  <strong className="block font-display text-[14.5px]">{testimonial.name}</strong>
                  <span className="text-[12.5px] text-paper/50">{testimonial.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
