"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { useBooking } from "./BookingProvider";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { site, whatsappUrl } from "@/lib/site";

const ageOptions = [
  "Moins de 20 ans",
  "20 – 25 ans",
  "26 – 30 ans",
  "31 – 35 ans",
  "Plus de 35 ans",
];

const situationOptions = [
  "Je n'ai pas encore d'idée de business",
  "J'ai une idée, je ne sais pas si elle est rentable",
  "J'ai un projet prêt, il me manque le financement",
  "J'ai déjà lancé, ça ne décolle pas",
  "Mon activité tourne, je veux la structurer",
];

const capitalOptions = [
  "Moins de 50 000 FCFA",
  "50 000 – 200 000 FCFA",
  "200 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "Plus de 1 000 000 FCFA",
];

const labelClass =
  "mb-[7px] block font-sans text-[12px] font-semibold tracking-[0.12em] text-paper/50 uppercase";

/**
 * Formulaire de réservation : à l'envoi, le message est mis en forme
 * et WhatsApp s'ouvre pré-rempli. Aucune donnée n'est stockée ni envoyée ailleurs.
 */
export function BookingModal() {
  const { isOpen, close } = useBooking();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    document.body.style.overflow = "";
    close();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) ?? "").toString().trim();
    const line = (label: string, value: string) => (value ? `${label} : ${value}\n` : "");

    const message =
      "Bonjour Honoré, je souhaite réserver mon appel de clarté.\n\n" +
      line("Nom", get("nom")) +
      line("Âge", get("age")) +
      line("Pays / ville", get("pays")) +
      line("WhatsApp", get("tel")) +
      line("Situation", get("situation")) +
      line("Moyens de départ", get("capital")) +
      line("Disponibilité", get("dispo")) +
      line("Objectif 90 jours", get("message")) +
      "\nDemande envoyée depuis le site.";

    window.open(whatsappUrl(message), "_blank", "noopener");
    form.reset();
    handleClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="booking-dialog"
      aria-labelledby="booking-title"
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) handleClose();
      }}
    >
      <div className="notch-lg relative max-h-[88vh] overflow-auto bg-panel px-6 py-8 shadow-[inset_0_0_0_1px_var(--color-hairline-strong)] sm:px-9 sm:py-10">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fermer"
          className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-paper/50 transition-colors hover:text-paper"
        >
          ×
        </button>

        <Eyebrow>Appel de clarté · offert</Eyebrow>
        <h2 id="booking-title" className="mt-3.5 text-[26px]">
          Réserver mon appel
        </h2>
        <p className="mt-3 text-[14.8px] text-paper/70">
          Réponds à ces quelques questions. À l&apos;envoi, WhatsApp s&apos;ouvre avec ton message
          déjà rédigé — il ne te reste qu&apos;à appuyer sur envoyer.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="f-nom">
                Nom et prénom *
              </label>
              <input id="f-nom" name="nom" required placeholder="Ton nom complet" className="field" />
            </div>
            <div>
              <label className={labelClass} htmlFor="f-age">
                Ton âge *
              </label>
              <select id="f-age" name="age" required defaultValue="" className="field">
                <option value="">Choisir…</option>
                {ageOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="f-pays">
                Pays / ville
              </label>
              <input id="f-pays" name="pays" placeholder="Ex. Cotonou, Bénin" className="field" />
            </div>
            <div>
              <label className={labelClass} htmlFor="f-tel">
                Numéro WhatsApp
              </label>
              <input id="f-tel" name="tel" placeholder="+229 …" className="field" />
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="f-situation">
              Où en es-tu aujourd&apos;hui ? *
            </label>
            <select id="f-situation" name="situation" required defaultValue="" className="field">
              <option value="">Choisir…</option>
              {situationOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="f-capital">
              Moyens que tu peux engager pour démarrer
            </label>
            <select id="f-capital" name="capital" defaultValue="" className="field">
              <option value="">Préfère ne pas répondre</option>
              {capitalOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="f-dispo">
              Ta disponibilité pour l&apos;appel *
            </label>
            <input
              id="f-dispo"
              name="dispo"
              required
              placeholder="Ex. en semaine après 18 h, ou samedi matin"
              className="field"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="f-msg">
              Ton objectif en une phrase
            </label>
            <textarea
              id="f-msg"
              name="message"
              placeholder="Ce que tu veux avoir réussi dans 90 jours…"
              className="field min-h-[88px] resize-y"
            />
          </div>

          <label className="flex items-start gap-3 text-[13.4px] text-paper/50" htmlFor="f-ok">
            <input
              type="checkbox"
              id="f-ok"
              name="consent"
              required
              className="mt-0.5 h-[17px] w-[17px] shrink-0 accent-brand"
            />
            <span>
              J&apos;accepte d&apos;être recontacté par {site.name} au sujet de ma demande. *
            </span>
          </label>

          <Button type="submit" className="w-full">
            Envoyer ma demande sur WhatsApp
          </Button>

          <p className="text-center text-[12.4px] text-paper/50">
            Aucune donnée n&apos;est stockée sur ce site. Ton message part directement sur WhatsApp.
          </p>
        </form>
      </div>
    </dialog>
  );
}
