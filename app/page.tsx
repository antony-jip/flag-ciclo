import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

/**
 * Kennis-home over het Flag-CiCLO-doek. Elke concurrent die de materiaalnaam
 * marketeert, stuurt zoekers naar deze term; dit domein vangt ze op met het
 * volledige verhaal en wijst voor bestellen naar duurzame-vlaggen.nl.
 */
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Het doek achter de duurzame vlag</span>
          <h1 className={styles.heroTitel}>
            Verdwijnt. <em>Zonder spoor.</em>
          </h1>
          <p className={styles.heroLead}>
            Flag-CiCLO is vlaggendoek met CiCLO&reg;-technologie: het presteert
            als gewoon polyester zolang je vlag wappert, en breekt na afdanking
            biologisch af in plaats van eeuwen als microplastic rond te zweven.
            Dit is de plek waar je leest hoe dat werkt, wat de testdata zegt en
            waar de grenzen liggen.
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
          <div className={styles.statRij}>
            <div className={styles.stat}>
              <div className={styles.statWaarde}>96%</div>
              <div className={styles.statLabel}>minder microplastics</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statWaarde}>94%</div>
              <div className={styles.statLabel}>afbraak in zeewater na 4 jaar</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statWaarde}>91%</div>
              <div className={styles.statLabel}>afbraak in bodem na 4 jaar</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectieDonker}>
        <div className="container">
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

      <section className={styles.sectie}>
        <div className="container">
          <h2 className={styles.sectieKop}>
            Waarom gewoon polyester het probleem is.
          </h2>
          <p className={styles.sectieIntro}>
            Een wapperende vlag slijt. Elke dag laat het doek microscopische
            vezels los die als microplastic in bodem en water belanden, en
            gewoon polyester breekt daar vrijwel niet af. Het verschil in de
            gestandaardiseerde afbraaktesten is geen nuance:
          </p>
          <div className={styles.duo}>
            <Image
              src="/beeld/microplastic.webp"
              alt="Microplastics uit vlaggendoek in het milieu"
              width={900}
              height={600}
              className={styles.duoBeeld}
            />
            <div className={styles.cijferVergelijk}>
              <div className={styles.cijferKaart} data-slecht="">
                <strong>5%</strong>
                <span>
                  afbraak van traditioneel polyester in zeewater na 4 jaar
                </span>
              </div>
              <div className={styles.cijferKaart}>
                <strong>94%</strong>
                <span>afbraak van doek met CiCLO&reg; in zeewater na 4 jaar</span>
              </div>
              <div className={styles.cijferKaart}>
                <strong>0</strong>
                <span>
                  aanpassingen nodig in druk, kleur of gebruik: het doek
                  presteert tijdens zijn leven als gewoon vlaggendoek
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectie}>
        <div className="container">
          <h2 className={styles.sectieKop}>Zo werkt de technologie.</h2>
          <div className={styles.stappen}>
            <div className={styles.stap}>
              <span className={styles.stapNummer}>1</span>
              <h3>Slimme productie</h3>
              <p>
                CiCLO&reg; wordt tijdens het spinnen als additief in de
                polyestervezel zelf ingebed, niet als coating erop. Het zit dus
                door het hele doek heen, ook na wassen en slijtage.
              </p>
            </div>
            <div className={styles.stap}>
              <span className={styles.stapNummer}>2</span>
              <h3>Normale levensduur</h3>
              <p>
                Zolang de vlag in gebruik is, gedraagt het doek zich als
                regulier vlaggenpolyester: zelfde drukkwaliteit, zelfde
                kleuren, zelfde wappergedrag.
              </p>
            </div>
            <div className={styles.stap}>
              <span className={styles.stapNummer}>3</span>
              <h3>Natuurlijke afbraak</h3>
              <p>
                Belandt het doek na afdanking in bodem of water, dan vormen de
                CiCLO-punten aanhechtingsplekken voor micro-organismen. Die
                breken de vezel af tot natuurlijke eindproducten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectie}>
        <div className="container">
          <h2 className={styles.sectieKop}>Waar koop je vlaggen van dit doek?</h2>
          <div className={styles.winkel}>
            <div>
              <p>
                Meerdere Nederlandse drukkers leveren inmiddels vlaggen op
                Flag-CiCLO-doek. Duurzame Vlaggen, de initiatiefnemer van deze
                site, is de enige webshop die er volledig op draait: elk
                product in de winkel is van dit doek, met bewijs erbij.
              </p>
              <ul className={styles.winkelPunten}>
                <li>Binnen 5 werkdagen geleverd</li>
                <li>CSRD-materiaalpaspoort bij elke order</li>
                <li>Direct online samenstellen en bestellen</li>
              </ul>
            </div>
            <a
              href="https://duurzame-vlaggen.nl/collectie"
              className={styles.knop}
            >
              Naar duurzame-vlaggen.nl
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
