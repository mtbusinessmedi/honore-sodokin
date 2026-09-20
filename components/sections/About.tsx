import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Eyebrow } from "@/components/ui/Section";
import { site } from "@/lib/site";

const credentials = [
  "Mentor en entrepreneuriat & financement de projets",
  `Communauté de ${site.followers} abonnés en ${site.area}`,
  "100 % d'avis recommandant son accompagnement",
  `Basé à ${site.location} — accompagnement à distance`,
];

export function About() {
  return (
    <section
      id="apropos"
      className="border-y border-hairline bg-[linear-gradient(180deg,var(--color-coal),#080a0e)] py-20 md:py-28"
    >
      <Container>
        <div className="grid items-center gap-11 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[70px]">
          {/* Portrait complet, sans recadrage */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
              <div className="bg-[linear-gradient(160deg,var(--color-brand),var(--color-blood))] p-[2px]">
                <Image
                  src="/honore-sodokin.webp"
                  alt={`Portrait de ${site.name}`}
                  width={1024}
                  height={1038}
                  className="h-auto w-full"
                />
              </div>
              {/* Signature posée sous la photo, sans recouvrir l'image. */}
              <div className="mt-4 flex justify-end">
                <span className="bg-void px-[18px] py-2 font-serif text-[26px] text-sand italic shadow-[inset_0_0_0_1px_var(--color-hairline-strong)]">
                  {site.tagline.toLowerCase()}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>À propos</Eyebrow>
            <h2 className="mt-[18px] text-[clamp(28px,4.2vw,50px)]">
              Celui qu&apos;on appelle{" "}
              <em className="font-serif font-normal tracking-normal text-flame italic">
                le Mentor des Mentors
              </em>
              .
            </h2>

            <p className="mt-5 text-[16.4px] text-paper/70">
              Je m&apos;appelle <b className="font-semibold text-paper">{site.name}</b>. Depuis le
              Bénin, j&apos;accompagne une génération de jeunes Africains qui refusent
              d&apos;attendre qu&apos;on leur donne une place — et qui décident de la créer.
            </p>
            <p className="mt-5 text-[16.4px] text-paper/70">
              Mon travail tient en trois gestes : t&apos;aider à{" "}
              <b className="font-semibold text-paper">voir</b> une opportunité rentable là où les
              autres voient un problème, te montrer comment{" "}
              <b className="font-semibold text-paper">financer</b> ton projet sans supplier une
              banque, et t&apos;installer le{" "}
              <b className="font-semibold text-paper">mindset</b> qui fait la différence entre un
              coup de chance et une entreprise prospère.
            </p>
            <p className="mt-5 text-[16.4px] text-paper/70">
              Plus de <b className="font-semibold text-paper">66 000 personnes</b> suivent cette
              méthode au quotidien. Ceux qui passent à l&apos;accompagnement ne viennent pas
              chercher de la motivation : ils viennent chercher un cadre, un ordre d&apos;exécution
              et quelqu&apos;un qui ne les laissera pas se raconter d&apos;histoires.
            </p>

            <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex gap-3 bg-white/3 px-[18px] py-4 text-[14px] text-paper/70 shadow-[inset_0_0_0_1px_var(--color-hairline)]"
                >
                  <span className="mt-1 text-[10px] text-brand" aria-hidden="true">
                    ◆
                  </span>
                  {credential}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
