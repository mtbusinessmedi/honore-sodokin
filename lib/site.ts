/** Informations publiques du mentor + réglages globaux du site. */

export const site = {
  name: "Honoré Sodokin",
  tagline: "The Dreamer",
  role: "Le Mentor des Mentors",
  initials: "HS",
  title: "Honoré Sodokin — Le Mentor des Mentors",
  description:
    "J'aide les jeunes Africains de 20 à 35 ans à identifier des idées de business rentables, à financer leurs projets sans dépendre des banques et à développer le mindset entrepreneurial nécessaire pour bâtir des entreprises prospères.",
  shortDescription:
    "Idée rentable. Financement sans banque. Mindset d'entrepreneur. 90 jours chrono.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://honore-sodokin.vercel.app",
  location: "Cotonou, Bénin",
  area: "Afrique francophone",
  followers: "66 000+",

  whatsapp: "22998017543",
  whatsappDisplay: "+229 98 01 75 43",
  phone: "+22954007416",
  phoneDisplay: "+229 54 00 74 16",
  email: "honorethedreamer@gmail.com",
} as const;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "#constat", label: "Le constat" },
  { href: "#programme", label: "Le programme" },
  { href: "#methode", label: "La méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#faq", label: "FAQ" },
] as const;
