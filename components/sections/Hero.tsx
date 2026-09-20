import { BookingButton } from "@/components/booking/BookingButton";
import { ButtonLink } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { PortraitStage } from "@/components/ui/PortraitStage";
import { Container, Eyebrow } from "@/components/ui/Section";
import { site, whatsappUrl } from "@/lib/site";

const proof = [
  { value: 66, suffix: "", label: "Milliers d'abonnés" },
  { value: 100, suffix: " %", label: "De recommandations" },
  { value: 90, suffix: "", label: "Jours pour décoller" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-28">
      {/* halo rouge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[280px] -right-[220px] z-0 h-[900px] w-[900px] bg-[radial-gradient(circle,rgba(225,20,51,0.22)_0%,rgba(225,20,51,0.06)_40%,transparent_66%)] blur-[10px]"
      />
      {/* grille technique */}
      <div
        aria-hidden="true"
        className="hero-grid-bg pointer-events-none absolute inset-0 z-0 opacity-50"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative">
            {/* filet vertical de marque */}
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[34px] hidden h-[110px] w-px bg-[linear-gradient(180deg,var(--color-brand),transparent)] lg:block"
            />

            <Eyebrow>{site.role}</Eyebrow>

            <h1 className="mt-[22px] text-[clamp(38px,5.6vw,68px)]">
              Tu peux rester <span className="strike">une poule</span>.
              <br />
              Ou apprendre à <span className="text-gradient">voler</span>.
            </h1>

            <p className="mt-6 max-w-[560px] text-[18px] text-paper/70">
              J&apos;accompagne les jeunes Africains de{" "}
              <b className="font-semibold text-paper">20 à 35 ans</b> à identifier une idée de
              business réellement rentable, à la{" "}
              <b className="font-semibold text-paper">financer sans dépendre des banques</b>, et à
              construire le mindset qui transforme un projet en entreprise qui dure.{" "}
              <b className="font-semibold text-paper">90 jours chrono.</b>
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <BookingButton>Réserver mon appel de clarté</BookingButton>
              <ButtonLink
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                Écrire sur WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-5 border-t border-hairline pt-6">
              {proof.map((item) => (
                <div key={item.label}>
                  <strong className="block font-display text-[22px] font-extrabold">
                    <CountUp value={item.value} suffix={item.suffix} immediate />
                  </strong>
                  <span className="text-[11.5px] tracking-[0.14em] text-paper/50 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mise en scène du portrait détouré */}
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            {/* libellé vertical */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 -left-6 hidden -translate-y-1/2 -rotate-90 font-display text-[11px] font-bold tracking-[0.34em] whitespace-nowrap text-paper/30 uppercase xl:block"
            >
              90 jours chrono
            </span>

            <PortraitStage variant="hero" priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
