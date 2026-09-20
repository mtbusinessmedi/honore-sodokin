import { Container } from "@/components/ui/Section";
import { site } from "@/lib/site";

const items = [
  `${site.location} · ${site.area}`,
  `${site.followers} jeunes suivent sa méthode`,
  "100 % de recommandations",
];

/** Bandeau de réassurance au-dessus de la navigation. */
export function TopBar() {
  return (
    <div className="border-b border-hairline bg-[#040508] text-[12px] text-paper/50">
      <Container>
        <div className="flex items-center justify-center gap-5 py-[11px] md:justify-between">
          {items.map((item, index) => (
            <span
              key={item}
              className={`flex items-center gap-2.5 font-semibold tracking-[0.06em] uppercase ${
                index === 0 ? "" : "hidden md:flex"
              }`}
            >
              <span className="h-[5px] w-[5px] shrink-0 rotate-45 bg-brand" />
              {item}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
