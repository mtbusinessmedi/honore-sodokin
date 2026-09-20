# Honoré Sodokin — The Dreamer

Landing page de l'accompagnement entrepreneurial d'Honoré Sodokin, « Le Mentor des
Mentors » : aider les jeunes Africains de 20 à 35 ans à trouver une idée de business
rentable, à la financer sans dépendre des banques et à bâtir le mindset qui fait durer.

## Stack

| Brique | Rôle |
| --- | --- |
| **Next.js 16** (App Router) | structure du site, SEO, performance, export statique |
| **React 19** | composants réutilisables |
| **TypeScript** | contenu et props typés |
| **Tailwind CSS 4** | design system et responsive |
| **HTML5 sémantique** | structure et accessibilité |
| **next/font** | Sora, Inter et Instrument Serif auto-hébergées |
| **Vercel** | déploiement |

## Démarrer

```bash
npm install
```

```bash
npm run dev
```

Le site tourne sur http://localhost:3000.

```bash
npm run build
```

`next build` produit un dossier `out/` entièrement statique, déployable sur Vercel,
GitHub Pages ou n'importe quel hébergeur de fichiers.

## Organisation

```
app/
  layout.tsx        polices, métadonnées SEO, Open Graph
  page.tsx          assemblage des sections + données structurées JSON-LD
  globals.css       design tokens Tailwind (couleurs, polices) et classes maison
components/
  booking/          contexte + modale de réservation (envoi vers WhatsApp)
  layout/           barre d'infos, navigation, pied de page, barre mobile
  sections/         une section de la page par fichier
  ui/               boutons, conteneur, titres, apparition au scroll, compteurs
lib/
  site.ts           coordonnées et réglages globaux
  content.ts        tout le copywriting, typé
public/             portrait, image de partage
```

**Modifier un texte** : tout le copywriting est dans `lib/content.ts` et
`lib/site.ts`. Aucun texte n'est codé en dur dans les sections, sauf les titres
de section eux-mêmes.

## Parcours de conversion

Tous les boutons « Réserver » ouvrent la même modale. À l'envoi, les réponses sont
mises en forme et WhatsApp s'ouvre avec le message déjà rédigé : il ne reste qu'à
appuyer sur envoyer. Aucune donnée n'est stockée ni envoyée à un serveur tiers.

Le numéro de destination est dans `lib/site.ts` (`whatsapp`).

## Images

Le portrait est affiché **en entier**, dans son ratio d'origine, sans recadrage :
pas de `object-fit: cover`, pas de hauteur fixe, et aucun élément flottant
par-dessus. Les badges (« 90 j », signature) sont posés sous la photo.

Le portrait est servi en WebP (43 Ko) et l'image de partage Open Graph est en
`public/og.jpg` (1200 × 630).

## SEO

- Métadonnées complètes (title, description, mots-clés, canonical)
- Open Graph et Twitter Card avec visuel dédié
- Données structurées JSON-LD : `Person`, `WebSite` et `FAQPage`
- HTML sémantique (`header`, `main`, `section`, `article`, `figure`, `ol`)
- Page entièrement pré-rendue au build

## ⚠️ À faire avant de communiquer le site

- **Témoignages** — les trois retours de `lib/content.ts` sont des exemples de mise
  en page (`testimonialsArePlaceholders = true`). Les remplacer par de vrais
  témoignages clients, ou retirer `<Testimonials />` de `app/page.tsx`.
- **Tarif** — seul l'appel de clarté (offert) est affiché. Ajouter le prix de
  l'accompagnement 90 jours si Honoré souhaite le montrer.
- **Photos** — une seule photo est disponible aujourd'hui ; elle sert au hero et à
  la section À propos. Deux ou trois visuels supplémentaires donneraient plus de relief.
- **Domaine** — renseigner `NEXT_PUBLIC_SITE_URL` avec le domaine final pour que les
  URLs canoniques et Open Graph pointent au bon endroit.

## Accessibilité et robustesse

- Le contenu est visible par défaut : les animations d'apparition ne masquent que
  les éléments hors écran, et uniquement si JavaScript tourne.
- `prefers-reduced-motion` désactive animations et compteurs.
- Navigation au clavier, focus visible, libellés de formulaire explicites.
- Responsive vérifié de 375 px à 1440 px, sans débordement horizontal.
