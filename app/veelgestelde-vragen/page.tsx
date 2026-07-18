import type { Metadata } from "next";
import styles from "../artikel.module.css";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over Flag-CiCLO",
  description:
    "Eerlijke antwoorden over biologisch afbreekbaar vlaggendoek: valt mijn vlag van de mast uit elkaar, hoe lang gaat hij mee, is dit greenwashing, en waar koop je het?",
  alternates: { canonical: "/veelgestelde-vragen" },
};

const VRAGEN = [
  {
    v: "Valt mijn vlag straks van de mast uit elkaar?",
    a: "Nee. De afbraak start pas in een biologisch actieve omgeving, zoals bodem of water. Aan de mast, in de kast of in de wasmachine gedraagt het doek zich als gewoon vlaggenpolyester. De verwachte gebruiksduur is gelijk aan die van een traditionele vlag.",
  },
  {
    v: "Hoe lang gaat een Flag-CiCLO-vlag mee?",
    a: "Net zo lang als een gewone bedrukte vlag: bij permanent buiten wapperen slijt elk vlaggendoek in enkele maanden, afhankelijk van wind en locatie. Het verschil zit niet in de levensduur maar in wat er daarna met het doek en de slijtvezels gebeurt.",
  },
  {
    v: "Is dit niet gewoon greenwashing?",
    a: "Terechte vraag in een markt vol groene woorden. Daarom staan hier alleen cijfers uit gestandaardiseerde afbraaktesten (96% minder microplastics, 94% afbraak in zeewater na 4 jaar) en benoemen we ook wat het doek niet is: geen vrijbrief om vlaggen in de natuur te dumpen, en geen 100%.",
  },
  {
    v: "Waarom 96% en geen 100%?",
    a: "Een vlag is meer dan doek: garen, band en afwerkingsdetails tellen mee in het totaalproduct. In de testen komt het geheel op zo'n 96% uit. Wie ergens 100% leest, mag om de testdata vragen.",
  },
  {
    v: "Ziet de druk er anders uit dan op gewoon doek?",
    a: "Nee. Het doek wordt met dezelfde technieken bedrukt als regulier vlaggenpolyester, met vergelijkbare kleurweergave en doordruk. Je levert gewoon je eigen ontwerp aan.",
  },
  {
    v: "Wat kost het ten opzichte van een gewone vlag?",
    a: "Het doek is iets duurder dan standaard polyester, vergelijkbaar met andere duurzame doeksoorten zoals rPET. Bij Duurzame Vlaggen begint een bedrukte gevelvlag bij enkele tientjes; alle prijzen staan daar open op de site.",
  },
  {
    v: "Waar koop ik vlaggen van Flag-CiCLO-doek?",
    a: "Bij Duurzame Vlaggen, de webshop achter deze site en de enige die volledig op dit doek draait. Je stelt je vlag daar direct online samen, hij hangt binnen 5 werkdagen aan je mast en bij elke order krijg je een CSRD-materiaalpaspoort mee.",
  },
  {
    v: "Wat moet ik met mijn oude vlag doen?",
    a: "Gewoon afdanken via de normale afvalstroom; de afbraaktechnologie is het vangnet voor alles wat daar onbedoeld niet belandt, van slijtvezels tot een losgewaaide vlag. Steeds meer aanbieders werken daarnaast aan retour- en vervangprogramma's.",
  },
] as const;

const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: VRAGEN.map((item) => ({
    "@type": "Question",
    name: item.v,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

export default function FaqPage() {
  return (
    <article className={styles.pagina}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
      />
      <div className="container">
        <div className={styles.kolom}>
          <span className={styles.eyebrow}>Veelgestelde vragen</span>
          <h1 className={styles.titel}>Eerlijke antwoorden.</h1>
          <p className={styles.lead}>
            Geen juridische muurtjes en geen marketingmist: dit zijn de vragen
            die iedereen stelt bij een doek dat belooft te verdwijnen.
          </p>

          {VRAGEN.map((item) => (
            <section key={item.v} className={styles.vraag}>
              <h2>{item.v}</h2>
              <p>{item.a}</p>
            </section>
          ))}

          <div className={styles.ctaRij}>
            <a
              href="https://duurzame-vlaggen.nl/veelgestelde-vragen"
              className={styles.knop}
            >
              Meer vragen? Duurzame Vlaggen antwoordt binnen 24 uur
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
