"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Un élément est « en vue » dès qu'il entre dans les 90 % bas du viewport. */
function isInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

type Entry = { el: HTMLElement; show: () => void };

/* Registre partagé : un seul écouteur de scroll pour toute la page. */
const pending = new Set<Entry>();
let frame = 0;
let listening = false;

function flush() {
  frame = 0;
  pending.forEach((entry) => {
    if (!entry.el.isConnected || isInView(entry.el)) {
      entry.show();
      pending.delete(entry);
    }
  });
  if (pending.size === 0) stopListening();
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(flush);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

type RevealProps = {
  children: ReactNode;
  /** Décalage en ms, pour faire apparaître une grille en cascade. */
  delay?: number;
  className?: string;
};

/**
 * Apparition en fondu au scroll.
 *
 * Principe : le contenu est rendu côté serveur et reste visible par défaut.
 * Le composant ne masque que les éléments situés hors écran au moment de
 * l'hydratation, puis les révèle au scroll. Si JavaScript ne tourne pas,
 * rien n'est masqué — aucun contenu ne peut disparaître.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let entry: Entry | null = null;

    const id = requestAnimationFrame(() => {
      // Déjà à l'écran au chargement : on l'affiche tel quel, sans animation.
      if (isInView(el)) return;

      setState("armed");
      entry = { el, show: () => setState("shown") };
      pending.add(entry);
      startListening();
      schedule();
    });

    return () => {
      cancelAnimationFrame(id);
      if (entry) pending.delete(entry);
      if (pending.size === 0) stopListening();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${state === "armed" ? "armed" : ""} ${
        state === "shown" ? "armed shown" : ""
      } ${className}`.trim()}
      style={delay && state !== "idle" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
