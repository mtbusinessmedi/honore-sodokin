import { marqueeItems } from "@/lib/content";

/** Bandeau défilant des promesses du programme. */
export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-hairline bg-[#040508] py-[17px]"
    >
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-11 pr-11 font-display text-[13px] font-bold tracking-[0.2em] text-paper/50 uppercase"
          >
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}
