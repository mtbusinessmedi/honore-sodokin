import { BookingTextLink } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Section";
import { navLinks, site, whatsappUrl } from "@/lib/site";

const headingClass =
  "mb-[18px] font-sans text-[12px] font-semibold tracking-[0.2em] text-sand uppercase";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-[#040508] pt-16 pb-10">
      <Container>
        <div className="grid gap-11 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="mb-[18px] flex items-center gap-3.5">
              <span className="hex grid h-10 w-10 shrink-0 place-items-center bg-[linear-gradient(140deg,var(--color-brand),var(--color-blood))] font-display text-[15px] font-extrabold text-white">
                {site.initials}
              </span>
              <span>
                <strong className="block font-display text-[15.5px] leading-tight font-bold">
                  {site.name}
                </strong>
                <small className="text-[10.5px] tracking-[0.24em] text-sand uppercase">
                  {site.tagline}
                </small>
              </span>
            </a>
            <p className="max-w-[380px] text-[14.5px] text-paper/50">{site.description}</p>
          </div>

          <div>
            <h4 className={headingClass}>Navigation</h4>
            <div className="grid gap-[11px] text-[14.5px] text-paper/50">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={headingClass}>Contact</h4>
            <div className="grid gap-[11px] text-[14.5px] text-paper/50">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                WhatsApp · {site.whatsappDisplay}
              </a>
              <a href={`tel:${site.phone}`} className="transition-colors hover:text-paper">
                Téléphone · {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">
                {site.email}
              </a>
              <BookingTextLink>Réserver un appel</BookingTextLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-hairline pt-6 text-[12.5px] text-paper/50">
          <span>
            © {new Date().getFullYear()} {site.name} — {site.tagline}. Tous droits réservés.
          </span>
          <span>{site.location} · Accompagnement à distance</span>
        </div>
      </Container>
    </footer>
  );
}
