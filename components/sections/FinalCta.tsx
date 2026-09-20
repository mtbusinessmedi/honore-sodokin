import { BookingButton } from "@/components/booking/BookingButton";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { whatsappUrl } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-[linear-gradient(180deg,#080a0e,var(--color-void))] py-24 text-center md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-340px] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(225,20,51,0.28),transparent_62%)]"
      />
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-[900px] text-[clamp(32px,5vw,58px)]">
            Dans 90 jours, tu auras 90 jours de plus.
            <br />
            La seule question, c&apos;est : <span className="text-gradient">avec quoi ?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-[17.5px] text-paper/70">
            Le même temps passera, que tu décides ou non. Autant qu&apos;il travaille pour toi.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <BookingButton>Réserver mon appel de clarté</BookingButton>
            <ButtonLink
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Parler sur WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-6 text-[12.5px] tracking-[0.06em] text-paper/50">
            Gratuit · 30 minutes · Réponse sous 24 à 48 h
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
