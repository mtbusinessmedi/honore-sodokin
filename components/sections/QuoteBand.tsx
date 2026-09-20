import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { site } from "@/lib/site";

/** Citation issue des publications d'Honoré Sodokin. */
export function QuoteBand() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(225,20,51,0.2),transparent_68%)]"
      />
      <Container>
        <Reveal>
          <blockquote className="mx-auto max-w-[900px] font-serif text-[clamp(28px,4.6vw,52px)] leading-[1.22] italic">
            « Il y a de l&apos;argent partout. C&apos;est toi qui ne le vois pas encore. »
          </blockquote>
          <cite className="mt-6 block font-display text-[12px] tracking-[0.24em] text-sand uppercase not-italic">
            {site.name} — {site.tagline}
          </cite>
        </Reveal>
      </Container>
    </section>
  );
}
