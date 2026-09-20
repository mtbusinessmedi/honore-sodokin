import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section aria-label="Chiffres clés">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-px bg-hairline shadow-[0_0_0_1px_var(--color-hairline)] md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-void px-6 py-10 text-center">
                <strong className="text-gradient-cold block font-display text-[clamp(30px,4vw,44px)] font-extrabold">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </strong>
                <span className="mt-2.5 block text-[11.5px] tracking-[0.16em] text-paper/50 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
