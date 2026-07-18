import type { Metadata } from "next";
import styles from "../artikel.module.css";

export const metadata: Metadata = {
  title: "Wat Flag-CiCLO betekent voor je CSRD-rapportage",
  description:
    "Vlaggen en banieren zijn een kleine maar zichtbare post in je duurzaamheidsverslag. Hoe biologisch afbreekbaar doek zich verhoudt tot CSRD en ESRS E2-5, en welk bewijs je nodig hebt.",
  alternates: { canonical: "/csrd" },
};

export default function CsrdPage() {
  return (
    <article className={styles.pagina}>
      <div className="container">
        <div className={styles.kolom}>
          <span className={styles.eyebrow}>CSRD</span>
          <h1 className={styles.titel}>
            Je vlaggen staan straks in je duurzaamheidsverslag.
          </h1>
          <p className={styles.lead}>
            De CSRD verplicht steeds meer organisaties om over hun werkelijke
            milieu-impact te rapporteren, tot en met de materialen die ze
            inkopen. Marketingmateriaal dat microplastic de omgeving in slijt,
            is dan geen detail meer maar een post. Zo past vlaggendoek in dat
            verhaal.
          </p>

          <h2>Waar het schuurt: ESRS E2</h2>
          <p>
            Binnen de CSRD gaat de standaard ESRS E2 over vervuiling, en
            E2-5 specifiek over stoffen die de organisatie de omgeving in
            brengt, inclusief microplastics. Een wapperende polyester vlag is
            precies dat: een bron van microvezels op een zichtbare plek,
            aangeschaft door de organisatie zelf. Klein in tonnage, groot in
            symboolwaarde voor wie je verslag leest.
          </p>

          <h2>Wat afbreekbaar doek daaraan verandert</h2>
          <p>
            Flag-CiCLO draait die post om. In plaats van een bron van
            persistente microplastics rapporteer je een materiaal waarvan de
            slijtvezels en het doek zelf biologisch afbreken, met testdata
            erachter: 96% minder microplastic-vervuiling, 94% afbraak in
            zeewater en 91% in bodem binnen vier jaar. Van een risico-regel
            naar een voorbeeldmaatregel, voor de prijs van een gewone
            bedrukte vlag.
          </p>

          <h2>Welk bewijs je nodig hebt</h2>
          <p>
            Een verslag is zo sterk als zijn onderbouwing. Vraag bij aanschaf
            om documentatie van het materiaal: wat het doek is, welke
            technologie erin zit en op welke testdata de claims rusten.
            Duurzame Vlaggen, initiatiefnemer van deze site, levert daarom
            standaard een CSRD-materiaalpaspoort mee bij elke order: een
            document per bestelling dat je rechtstreeks aan je
            E2-onderbouwing kunt hangen.
          </p>

          <h2>Ook als je (nog) niet CSRD-plichtig bent</h2>
          <p>
            De rapportageplicht rolt in fasen uit en veel mkb-organisaties
            vallen er voorlopig buiten. Maar gemeenten, corporates en
            aanbestedende diensten vragen hun leveranciers nu al om
            duurzaamheidsonderbouwing door de hele keten. Wie dan een
            materiaalpaspoort kan overleggen in plaats van een folder, staat
            er anders voor.
          </p>

          <p className={styles.noot}>
            Dit is voorlichting, geen juridisch advies. Hoe jouw organisatie
            precies moet rapporteren, bepaal je met je eigen
            duurzaamheidsteam of accountant.
          </p>

          <div className={styles.ctaRij}>
            <a href="https://duurzame-vlaggen.nl/csrd" className={styles.knop}>
              Zo werkt het materiaalpaspoort
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
