import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const SITE_URL = "https://flag-ciclo.nl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flag-CiCLO. Het vlaggendoek dat verdwijnt.",
    template: "%s | Flag-CiCLO",
  },
  description:
    "Alles over Flag-CiCLO: het biologisch afbreekbare vlaggendoek. Hoe de technologie werkt, wat de testdata zegt, hoe het zich verhoudt tot rPET en gewoon polyester, en wat het betekent voor je CSRD-rapportage.",
  alternates: { canonical: "/" },
};

/**
 * Kennisdomein over het materiaal, met Duurzame Vlaggen als initiatiefnemer.
 * Transparant eigenaarschap in schema en footer: een "onafhankelijke" site die
 * stiekem van de verkoper blijkt kost meer vertrouwen dan hij oplevert.
 */
const ORG_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Flag-CiCLO.nl",
  url: SITE_URL,
  inLanguage: "nl-NL",
  publisher: {
    "@type": "Organization",
    name: "Duurzame Vlaggen",
    legalName: "Sign Company VOF",
    url: "https://duurzame-vlaggen.nl",
  },
});

const NAV = [
  { href: "/technologie", label: "Technologie" },
  { href: "/vergelijking", label: "Vergelijking" },
  { href: "/csrd", label: "CSRD" },
  { href: "/veelgestelde-vragen", label: "Vragen" },
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${sora.variable} ${manrope.variable} ${bricolage.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_JSON_LD }}
        />
        <header className="siteHeader">
          <div className="container headerInner">
            <Link href="/" className="wordmark">
              Flag-CiCLO<span className="wordmarkNl">.nl</span>
            </Link>
            <nav className="headerNav" aria-label="Hoofdnavigatie">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              className="headerCta"
              href="https://duurzame-vlaggen.nl/collectie"
            >
              Bekijk vlaggen
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="siteFooter">
          <div className="container footerInner">
            <div className="footerKolom">
              <span className="footerKop">Flag-CiCLO.nl</span>
              <p>
                Kennis hoort eerlijk over zijn afzender te zijn: deze site is
                een initiatief van Duurzame Vlaggen (Sign Company VOF,
                Enkhuizen), de vlaggenwinkel die volledig op Flag-CiCLO-doek
                draait.
              </p>
            </div>
            <div className="footerKolom">
              <span className="footerKop">Verder lezen</span>
              {NAV.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <a href="https://duurzame-vlaggen.nl">duurzame-vlaggen.nl</a>
            </div>
            <div className="footerKolom">
              <span className="footerKop">Goed om te weten</span>
              <p>
                CiCLO&reg; is een technologie en merk van Intrinsic Advanced
                Materials, LLC. Deze site is geen offici&euml;le partner,
                distributeur of affiliate van Intrinsic Advanced Materials en
                spreekt niet namens hen. Cijfers komen uit de gepubliceerde
                testdata van de materiaalketen.
              </p>
            </div>
          </div>
          <div className="container footerBasis">
            &copy; {new Date().getFullYear()} Sign Company VOF &middot; Alle
            rechten voorbehouden.
          </div>
        </footer>
      </body>
    </html>
  );
}
