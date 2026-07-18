# Flag-CiCLO.nl

Kennisdomein over het Flag-CiCLO-vlaggendoek, een initiatief van Duurzame
Vlaggen (Sign Company VOF). Strategie: elke aanbieder die de materiaalnaam
marketeert, voedt zoekverkeer op "flag ciclo"; dit exact-match-domein vangt
die zoekers op met het volledige, eerlijke verhaal en verwijst voor
bestellingen naar duurzame-vlaggen.nl.

## Stack

Next.js (App Router), volledig statisch geprerenderd, geen backend. Huisstijl
volgt Styleguide V5.0 van duurzame-vlaggen.nl (Sora/Manrope/Bricolage,
forest/terracotta). Beelden in `public/beeld/` komen uit de
Duurzame-vlaggen-repo (levenscyclus, doek-weven, microplastic).

## Pagina's

- `/` — hero met testcijfers, levenscyclus in vier foto's, waarom-sectie,
  werking in drie stappen, winkel-CTA
- `/technologie` — hoe CiCLO in de vezel werkt, testdata, "waarom geen 100%"
- `/vergelijking` — Flag-CiCLO vs rPET (PETFLAG/SEAQUAL) vs gewoon polyester
- `/csrd` — wat het doek betekent voor ESRS E2-5 en welk bewijs je nodig hebt
- `/veelgestelde-vragen` — FAQ met FAQPage-schema

## Ontwikkelen en deployen

```bash
npm run dev    # lokaal (kies een vrije poort als 3000 bezet is)
npm run build  # productie-build, volledig statisch
```

Deploy: eigen Vercel-project, gekoppeld aan deze repo (push naar `main`),
met het domein flag-ciclo.nl in de projectinstellingen.

## Afspraken

- CiCLO® is een merk van Intrinsic Advanced Materials, LLC; de site is geen
  officiële partner en zegt dat expliciet in de footer.
- Claims alleen met cijfers uit de gepubliceerde testdata van de
  materiaalketen (96% minder microplastics, 94% zeewater / 91% bodem na 4
  jaar); consistent houden met duurzame-vlaggen.nl.
- Eigenaarschap transparant: "een initiatief van Duurzame Vlaggen" staat in
  de footer en in het WebSite-schema.
