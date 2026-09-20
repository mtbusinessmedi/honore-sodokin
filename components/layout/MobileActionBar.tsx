import { BookingButton } from "@/components/booking/BookingButton";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/site";

/** Barre d'action fixe en bas d'écran sur mobile. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-70 flex gap-2.5 border-t border-hairline bg-void/95 px-3.5 pt-[11px] pb-[calc(11px+env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
      <ButtonLink
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        className="flex-1 !px-3 !py-3.5 !text-[13px]"
      >
        WhatsApp
      </ButtonLink>
      <BookingButton className="flex-1 !px-3 !py-3.5 !text-[13px]">
        Réserver mon appel
      </BookingButton>
    </div>
  );
}
