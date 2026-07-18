import type { Metadata } from "next";
import Image from "next/image";
import styles from "../artikel.module.css";

export const metadata: Metadata = {
  title: "Zo werkt CiCLO in vlaggendoek",
  description:
    "CiCLO is een additief dat tijdens het spinnen in de polyestervezel wordt ingebed en aanhechtingspunten maakt voor micro-organismen. Hoe dat werkt, wat de testdata zegt en waarom het geen 100% is.",
  alternates: { canonical: "/technologie" },
};

export default function TechnologiePage() {
  return (
    <article className={styles.pagina}>
      <div className="container">
        <div className={styles.kolom}>
          <span className={styles.eyebrow}>Technologie</span>
          <h1 className={styles.titel}>
            Zo werkt CiCLO in vlaggendoek.
          </h1>
          <p className={styles.lead}>
            CiCLO&reg; is geen coating en geen ander soort stof. Het is een
            additief dat tijdens het spinnen in de polyestervezel zelf wordt
            ingebed. Daardoor blijft het doek zich tijdens het gebruik als
            gewoon vlaggenpolyester gedragen, en verandert alleen het einde
            van het verhaal.
          </p>

          <h2>Het probleem: polyester is te goed</h2>
          <p>
            Polyester is voor vlaggen het ideale materiaal: licht, sterk,
            kleurvast en betaalbaar. Precies die sterkte is buiten het gebruik
            het probleem. Slijtvezels die tijdens het wapperen loskomen en
            doek dat na afdanking in het milieu belandt, breken vrijwel niet
            af. In gestandaardiseerde zeewatertesten is traditioneel polyester
            na vier jaar nog nagenoeg intact: zo'n 5% afbraak.
          </p>

          <h2>De ingreep: aanhechtingspunten voor microben</h2>
          <p>
            Het CiCLO-additief vormt in de vezel talloze microscopische
            plekken waar micro-organismen op kunnen aanhaken. In een omgeving
            waar biologische afbraak plaatsvindt (bodem, zoet water, zeewater
            en stortplaats-omstandigheden) koloniseren microben die punten en
            breken ze de vezel stap voor stap af, vergelijkbaar met hoe
            natuurlijke vezels zoals wol vergaan. De eindproducten zijn de
            natuurlijke afbraakstoffen van dat proces.
          </p>
          <p>
            Belangrijk om te snappen: dat proces start pas in zo'n omgeving.
            Aan je mast, in de opslag of in de wasmachine gebeurt er niets
            bijzonders; de afbraak is geen houdbaarheidsdatum maar een
            reactie op een biologisch actieve omgeving.
          </p>

          <h2>Wat de testdata zegt</h2>
          <ul>
            <li>
              96% minder microplastic-vervuiling over de levenscyclus,
              doordat ook losgekomen slijtvezels afbreken.
            </li>
            <li>94% afbraak in zeewater na 4 jaar (traditioneel polyester: 5%).</li>
            <li>91% afbraak in bodem na 4 jaar.</li>
            <li>
              Volledig verdwijnen van een afgedankt doek duurt in de praktijk
              2 tot 4 jaar, afhankelijk van de omgeving.
            </li>
          </ul>
          <p>
            De cijfers komen uit de gepubliceerde testdata van de
            materiaalketen achter Flag-CiCLO (de CiCLO-technologie van
            Intrinsic Advanced Materials en de Europese weverij die het doek
            produceert), gebaseerd op gestandaardiseerde
            biodegradatie-testmethoden.
          </p>

          <h2>Waarom geen 100%?</h2>
          <p>
            Eerlijk is eerlijk: een vlag is meer dan doek. Garen, band en de
            details van de afwerking maken dat het totaalproduct in de testen
            op zo'n 96% uitkomt in plaats van een rond getal. Wie ergens
            "100% afbreekbaar" leest, mag daar dezelfde vraag stellen die wij
            hier beantwoorden.
          </p>

          <Image
            src="/beeld/doek-weven.webp"
            alt="Flag-CiCLO-doek op de weefmachine"
            width={1200}
            height={800}
            className={styles.beeld}
          />

          <p className={styles.noot}>
            CiCLO&reg; is een merk van Intrinsic Advanced Materials, LLC. Deze
            site is een onafhankelijk kennisinitiatief van Duurzame Vlaggen en
            spreekt niet namens de merkhouder.
          </p>

          <div className={styles.ctaRij}>
            <a
              href="https://duurzame-vlaggen.nl/materiaal"
              className={styles.knop}
            >
              Lees hoe Duurzame Vlaggen dit doek gebruikt
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
