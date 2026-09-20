import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/Section";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Ce qu'on me demande"
            accent="le plus souvent"
            after="."
            center
            className="mb-14"
          />
        </Reveal>

        <Reveal className="mx-auto max-w-[880px]">
          {faq.map((item, index) => (
            <details
              key={item.question}
              className={`faq-item border-t border-hairline ${
                index === faq.length - 1 ? "border-b" : ""
              }`}
            >
              <summary className="relative py-6 pr-11 font-display text-[17.5px] font-semibold">
                {item.question}
              </summary>
              <p className="-mt-1.5 pr-10 pb-7 text-[15.6px] text-paper/70">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
