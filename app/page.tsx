import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { AfbraakAnimatie } from "./AfbraakAnimatie";

/**
 * Kennis-home over het Flag-CiCLO-doek. Elke concurrent die de materiaalnaam
 * marketeert, stuurt zoekers naar deze term; dit domein vangt ze op met het
 * volledige verhaal en wijst voor bestellen naar duurzame-vlaggen.nl.
 */

/** Wapper-golf, hetzelfde merkmotief als op duurzame-vlaggen.nl. */
function Golf({ onder = false }: { onder?: boolean }) {
  return (
    <svg
      className={onder ? styles.golfOnder : styles.golf}
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,40 C240,72 480,4 720,28 C960,52 1200,12 1440,40 L1440,72 L0,72 Z"
        fill="currentColor"
      />
    </svg>
  );
}

const VLAGSOORTEN = [
  {
    naam: "Baniervlag",
    tekst: "De verticale blikvanger bij entrees, beurzen en langs de weg.",
    href: "https://duurzame-vlaggen.nl/collectie/baniervlag",
  },
  {
    naam: "Mastvlag",
    tekst: "De klassieker aan de mast, van 150 × 100 tot 350 × 225 cm.",
    href: "https://duurzame-vlaggen.nl/collectie/mastvlag",
  },
  {
    naam: "Beachvlag",
    tekst: "Mobiel en overal neer te zetten: events, terrassen, sportvelden.",
    href: "https://duurzame-vlaggen.nl/collectie/beachvlag",
  },
  {
    naam: "Gevelvlag",
    tekst: "Je merk aan de straat, aan een uithouder op de gevel.",
    href: "https://duurzame-vlaggen.nl/collectie/gevelvlag",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className={styles.eyebrow}>
              Het doek achter de duurzame vlag
            </span>
            <h1 className={styles.heroTitel}>
              Verdwijnt. <em>Zonder spoor.</em>
            </h1>
            <p className={styles.heroLead}>
              Flag-CiCLO is vlaggendoek met CiCLO&reg;-technologie: het
              presteert als gewoon polyester zolang je vlag wappert, en breekt
              na afdanking biologisch af in plaats van eeuwen als microplastic
              rond te zweven. Hier lees je hoe dat werkt, wat de testdata zegt
              en waar de grenzen liggen.
            </p>
            <div className={styles.heroActies}>
              <Link href="/technologie" className={styles.knop}>
                Zo werkt het
              </Link>
              <a
                href="https://duurzame-vlaggen.nl/collectie"
                className={styles.knopLicht}
              >
                Bekijk vlaggen van dit doek
              </a>
            </div>
          </div>

          <div className={styles.heroBeeldWrap}>
            <Image
              src="/beeld/in-gebruik.webp"
              alt="Flag-CiCLO-vlag in gebruik aan de mast"
              width={760}
              height={912}
              priority
              className={styles.heroBeeld}
            />
            <div className={styles.statCard}>
              <span className={styles.statWaarde}>96%</span>
              <span className={styles.statLabel}>minder microplastics</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statWaarde}>94%</span>
              <span className={styles.statLabel}>
                afbraak in zeewater na 4 jaar
              </span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statWaarde}>91%</span>
              <span className={styles.statLabel}>afbraak in bodem na 4 jaar</span>
            </div>
          </div>
        </div>
      </section>

      <Golf />
      <section className={styles.sectieDonker}>
        <div className="container">
          <span className={styles.kicker}>Levenscyclus</span>
          <h2 className={styles.sectieKop}>Van mast tot compost, in beeld.</h2>
          <p className={styles.sectieIntro}>
            Dezelfde vlag, vier momenten. Tijdens het gebruik merk je niets
            bijzonders; het verschil begint pas wanneer het doek wordt
            afgedankt en micro-organismen er vat op krijgen.
          </p>
          <div className={styles.cyclus}>
            <figure className={styles.cyclusStap}>
              <Image
                src="/beeld/in-gebruik.webp"
                alt="Flag-CiCLO-vlag in gebruik aan de mast"
                width={480}
                height={480}
                className={styles.cyclusFoto}
              />
              <figcaption className={styles.cyclusLabel}>In gebruik</figcaption>
              <span className={styles.cyclusSub}>presteert als polyester</span>
            </figure>
            <figure className={styles.cyclusStap}>
              <Image
                src="/beeld/start-afbraak.webp"
                alt="Doek aan het begin van de biologische afbraak"
                width={480}
                height={480}
                className={styles.cyclusFoto}
              />
              <figcaption className={styles.cyclusLabel}>
                Start afbraak
              </figcaption>
              <span className={styles.cyclusSub}>na afdanking</span>
            </figure>
            <figure className={styles.cyclusStap}>
              <Image
                src="/beeld/afbraak.webp"
                alt="Doek dat zichtbaar wordt afgebroken door micro-organismen"
                width={480}
                height={480}
                className={styles.cyclusFoto}
              />
              <figcaption className={styles.cyclusLabel}>Afbraak</figcaption>
              <span className={styles.cyclusSub}>1 tot 2 jaar</span>
            </figure>
            <figure className={styles.cyclusStap}>
              <Image
                src="/beeld/verdwenen.webp"
                alt="Gras waar het doek volledig in is opgegaan"
                width={480}
                height={480}
                className={styles.cyclusFoto}
              />
              <figcaption className={styles.cyclusLabel}>Verdwenen</figcaption>
              <span className={styles.cyclusSub}>2 tot 3 jaar</span>
            </figure>
          </div>
        </div>
      </section>
      <Golf onder />

      <section className={styles.sectie}>
        <div className="container">
          <span className={styles.kicker}>De werking</span>
          <h2 className={styles.sectieKop}>
            Zo breekt het doek zichzelf af.
          </h2>
          <div className={styles.werking}>
            <div>
              <div className={styles.werkingScene}>
                <AfbraakAnimatie />
              </div>
              <p className={styles.werkingOnderschrift}>
                Micro-organismen haken aan op de CiCLO-punten in de vezel en
                breken het doek stap voor stap af.
              </p>
            </div>
            <div className={styles.stappen}>
              <div className={styles.stap}>
                <span className={styles.stapNummer}>1</span>
                <div>
                  <h3>Slimme productie</h3>
                  <p>
                    CiCLO&reg; wordt tijdens het spinnen in de polyestervezel
                    zelf ingebed, niet als coating erop. Het zit door het hele
                    doek heen, ook na wassen en slijtage.
                  </p>
                </div>
              </div>
              <div className={styles.stap}>
                <span className={styles.stapNummer}>2</span>
                <div>
                  <h3>Normale levensduur</h3>
                  <p>
                    Aan de mast gedraagt het doek zich als regulier
                    vlaggenpolyester: zelfde drukkwaliteit, zelfde kleuren,
                    zelfde wappergedrag.
                  </p>
                </div>
              </div>
              <div className={styles.stap}>
                <span className={styles.stapNummer}>3</span>
                <div>
                  <h3>Natuurlijke afbraak</h3>
                  <p>
                    Belandt doek of slijtvezel in bodem of water, dan vormen de
                    CiCLO-punten aanhechtingsplekken voor micro-organismen, die
                    de vezel afbreken tot natuurlijke eindproducten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectie}>
        <div className="container">
          <span className={styles.kicker}>Het probleem</span>
          <h2 className={styles.sectieKop}>
            Waarom gewoon polyester niet oké is.
          </h2>
          <div className={styles.duo}>
            <Image
              src="/beeld/microplastic.webp"
              alt="Microplastics uit vlaggendoek in het milieu"
              width={900}
              height={600}
              className={styles.duoBeeld}
            />
            <div className={styles.balken}>
              <p>
                Een wapperende vlag slijt elke dag microscopische vezels de
                omgeving in. Het verschil zit in wat daarmee gebeurt. Afbraak
                in zeewater na vier jaar, volgens gestandaardiseerde testen:
              </p>
              <div className={styles.balkGroep}>
                <span className={styles.balkLabel}>Traditioneel polyester</span>
                <div className={styles.balkSpoor}>
                  <span
                    className={styles.balkVulling}
                    data-slecht=""
                    style={{ ["--w" as string]: "12%" }}
                  >
                    5%
                  </span>
                </div>
              </div>
              <div className={styles.balkGroep}>
                <span className={styles.balkLabel}>Doek met CiCLO&reg;</span>
                <div className={styles.balkSpoor}>
                  <span
                    className={styles.balkVulling}
                    style={{ ["--w" as string]: "94%" }}
                  >
                    94%
                  </span>
                </div>
              </div>
              <p className={styles.balkVoetnoot}>
                In bodem: 91% versus vrijwel niets. En omdat het additief in de
                vezel zelf zit, geldt hetzelfde voor elke losgekomen
                slijtvezel: 96% minder microplastic-vervuiling over de hele
                levenscyclus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectie}>
        <div className="container">
          <span className={styles.kicker}>De vlaggen</span>
          <h2 className={styles.sectieKop}>
            Elk vlagtype bestaat inmiddels op dit doek.
          </h2>
          <div className={styles.soorten}>
            {VLAGSOORTEN.map((soort) => (
              <a key={soort.naam} href={soort.href} className={styles.soort}>
                <span className={styles.soortNaam}>{soort.naam}</span>
                <p>{soort.tekst}</p>
                <span className={styles.soortLink}>
                  Bekijk en stel samen &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Golf />
      <section className={styles.winkelSectie}>
        <div className="container">
          <h2>
            Laat je merk <em>wapperen</em>, niet de planeet belasten.
          </h2>
          <p className={styles.winkelTekst}>
            Vlaggen van Flag-CiCLO-doek bestel je bij Duurzame Vlaggen: de
            enige webshop die er volledig op draait. Elk product van dit doek,
            met bewijs erbij en zonder gedoe.
          </p>
          <ul className={styles.winkelPunten}>
            <li>Binnen 5 werkdagen geleverd</li>
            <li>CSRD-materiaalpaspoort bij elke order</li>
            <li>Direct online samenstellen en bestellen</li>
          </ul>
          <a
            href="https://duurzame-vlaggen.nl/collectie"
            className={styles.winkelKnop}
          >
            Naar duurzame-vlaggen.nl
          </a>
        </div>
      </section>
    </>
  );
}
