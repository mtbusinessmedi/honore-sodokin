import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { About } from "@/components/sections/About";
import { Audience } from "@/components/sections/Audience";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Method } from "@/components/sections/Method";
import { Offer } from "@/components/sections/Offer";
import { PainSection } from "@/components/sections/PainSection";
import { Pillars } from "@/components/sections/Pillars";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { faq } from "@/lib/content";
import { site } from "@/lib/site";

/** Données structurées : aide Google à comprendre qui est Honoré et ce qu'il propose. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: site.tagline,
        jobTitle: site.role,
        description: site.description,
        image: `${site.url}/honore-sodokin.jpg`,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cotonou",
          addressCountry: "BJ",
        },
        knowsAbout: [
          "Entrepreneuriat",
          "Financement de projets",
          "Mindset entrepreneurial",
          "Création d'entreprise en Afrique",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "fr-FR",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <TopBar />
      <SiteHeader />

      <main id="top">
        <Hero />
        <Marquee />
        <PainSection />
        <BeforeAfter />
        <Pillars />
        <QuoteBand />
        <Method />
        <Stats />
        <Audience />
        <About />
        <Testimonials />
        <Offer />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
