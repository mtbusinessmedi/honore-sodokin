import Image from "next/image";
import portrait from "@/assets/honore-sodokin.webp";
import { BookingButton } from "@/components/booking/BookingButton";
import { ButtonLink } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Container, Eyebrow } from "@/components/ui/Section";
import { site, whatsappUrl } from "@/lib/site";

const proof = [
  { value: 66, suffix: "", label: "Milliers d'abonnés" },
  { value: 100, suffix: " %", label: "De recommandations" },
  { value: 90, suffix: "", label: "Jours pour décoller" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* halo rouge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[260px] -right-[180px] z-0 h-[880px] w-[880px] bg-[radial-gradient(circle,rgba(225,20,51,0.28)_0%,rgba(225,20,51,0.08)_38%,transparent_66%)] blur-[10px]"
      />
      {/* grille technique */}
      <div aria-hidden="true" className="hero-grid-bg pointer-events-none absolute inset-0 z-0 opacity-50" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-[74px]">
          <div>
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

          {/* Portrait : affiché en entier, ratio d'origine conservé, aucun recadrage */}
          <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="hatch absolute -right-6 -bottom-6 -z-10 hidden h-[180px] w-[180px] lg:block"
            />
            <div className="bg-[linear-gradient(160deg,var(--color-brand),var(--color-blood))] p-[2px]">
              <div className="relative bg-void">
                <Image
                  src={portrait}
                  alt={`${site.name}, ${site.role.toLowerCase()}`}
                  priority
                  className="h-auto w-full"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(185deg,rgba(225,20,51,0.10)_0%,transparent_34%,rgba(6,7,10,0.18)_72%,rgba(6,7,10,0.60)_100%)]"
                />
              </div>
            </div>

            {/* Badge posé sous la photo : il ne recouvre aucune partie de l'image. */}
            <div className="mt-4 flex justify-end">
              <div className="notch-sm bg-void px-[22px] py-4 shadow-[inset_0_0_0_1px_var(--color-hairline-strong)]">
                <strong className="block font-display text-[26px] leading-none font-extrabold text-flame">
                  90 j
                </strong>
                <span className="text-[10.5px] tracking-[0.2em] text-paper/50 uppercase">
                  Chrono
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
