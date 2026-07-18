import type { Metadata } from "next";
import Image from "next/image";
import styles from "../artikel.module.css";

export const metadata: Metadata = {
  title: "Flag-CiCLO vs rPET vs gewoon polyester",
  description:
    "De eerlijke vergelijking tussen de drie soorten vlaggendoek: gewoon polyester, gerecycled rPET (PETFLAG, SEAQUAL) en biologisch afbreekbaar Flag-CiCLO. Grondstof, microplastics, einde leven en CSRD.",
  alternates: { canonical: "/vergelijking" },
};

export default function VergelijkingPage() {
  return (
    <article className={styles.pagina}>
      <div className="container">
        <div className={styles.kolom}>
          <span className={styles.eyebrow}>Vergelijking</span>
          <h1 className={styles.titel}>
            Flag-CiCLO, rPET of gewoon polyester?
          </h1>
          <p className={styles.lead}>
            "Duurzaam vlaggendoek" betekent in de markt drie verschillende
            dingen. Gerecycled doek (rPET, verkocht als PETFLAG of SEAQUAL)
            lost een ander probleem op dan afbreekbaar doek, en gewoon
            polyester lost geen van beide op. Dit is het verschil, zonder
            marketingmist.
          </p>
        </div>

        <div className={styles.tabelWrap}>
          <table className={styles.tabel}>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Gewoon polyester</th>
                <th scope="col">rPET (PETFLAG, SEAQUAL)</th>
                <th scope="col">Flag-CiCLO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Grondstof</th>
                <td>Nieuwe aardolie</td>
                <td data-goed="">Gerecyclede petflessen of oceaanplastic</td>
                <td>Polyester met CiCLO&reg;-additief in de vezel</td>
              </tr>
              <tr>
                <th scope="row">Microplastics tijdens gebruik</th>
                <td>Ja, slijtvezels blijven eeuwen bestaan</td>
                <td>Ja, gerecycled polyester slijt net zo goed</td>
                <td data-goed="">Slijtvezels breken biologisch af (96% minder)</td>
              </tr>
              <tr>
                <th scope="row">Einde leven</th>
                <td>Restafval of zwerfvuil, vrijwel geen afbraak</td>
                <td>Opnieuw recyclebaar (mits ingezameld), anders zwerfvuil</td>
                <td data-goed="">94% afbraak in zeewater, 91% in bodem (4 jaar)</td>
              </tr>
              <tr>
                <th scope="row">Het verhaal dat klopt</th>
                <td>Geen</td>
                <td>"Wij gaven plastic een tweede leven"</td>
                <td data-goed="">"Onze vlag laat niets achter"</td>
              </tr>
              <tr>
                <th scope="row">CSRD-rapportage</th>
                <td>Negatieve post (microplastics, ESRS E2)</td>
                <td>Circulaire input telt mee, vervuiling blijft</td>
                <td data-goed="">
                  Onderbouwing voor ESRS E2-5 met materiaalpaspoort
                </td>
              </tr>
              <tr>
                <th scope="row">Druk en kleur</th>
                <td>Standaard</td>
                <td>Standaard</td>
                <td>Standaard (geen concessies)</td>
              </tr>
              <tr>
                <th scope="row">Prijs</th>
                <td>Laagste</td>
                <td>Iets boven standaard</td>
                <td>Iets boven standaard</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.kolom}>
          <h2>De kern van het verschil</h2>
          <p>
            rPET is een grondstofverhaal: het doek begint beter, maar eindigt
            precies zoals gewoon polyester. Zolang een vlag wappert, slijt hij
            microplastic de omgeving in, en een vlag hangt nu net buiten. Voor
            producten die binnen blijven en netjes ingezameld worden, is rPET
            een prima keuze. Voor een vlag is het einde van het verhaal
            belangrijker dan het begin, en dat einde is waar CiCLO het
            verschil maakt.
          </p>
          <p>
            De eerlijke kanttekening bij Flag-CiCLO: de afbraak is een
            noodrem, geen vrijbrief. Een afgedankte vlag hoort nog steeds
            gewoon in de juiste afvalstroom; het verschil is wat er gebeurt
            met alles wat daar onvermijdelijk niet belandt, van slijtvezels
            tot een losgewaaide vlag.
          </p>

          <Image
            src="/beeld/polyester-vs-duurzaam.webp"
            alt="Gewoon polyester naast Flag-CiCLO-doek"
            width={1200}
            height={800}
            className={styles.beeld}
          />

          <div className={styles.ctaRij}>
            <a
              href="https://duurzame-vlaggen.nl/collectie"
              className={styles.knop}
            >
              Bekijk vlaggen op Flag-CiCLO-doek
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
