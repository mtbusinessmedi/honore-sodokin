"use client";

import type { ReactNode } from "react";
import { useBooking } from "./BookingProvider";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";

/** Bouton qui ouvre la modale de réservation, utilisable partout dans la page. */
export function BookingButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onSelect,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Exécuté avant l'ouverture (fermer le menu mobile, par exemple). */
  onSelect?: () => void;
}) {
  const { open } = useBooking();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        onSelect?.();
        open();
      }}
    >
      {children}
    </Button>
  );
}

/** Variante discrète, rendue comme un lien de navigation. */
export function BookingTextLink({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useBooking();

  return (
    <button
      type="button"
      onClick={open}
      className={`cursor-pointer text-left transition-colors hover:text-paper ${className}`}
    >
      {children}
    </button>
  );
}
