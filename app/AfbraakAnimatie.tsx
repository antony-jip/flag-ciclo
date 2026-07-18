import styles from "./afbraak.module.css";

/**
 * De afbraak als doorlopende animatie: een vlaggendoek van losse "vezels"
 * (cellen) waar microben op verschijnen, waarna de cellen één voor één
 * oplossen richting de bodem. Pure CSS op een inline SVG; bij
 * prefers-reduced-motion staat het beeld stil.
 *
 * De golf loopt van de wapperende rand (rechtsonder) terug naar de mast:
 * elke cel krijgt zijn vertraging via een CSS-variabele.
 */

const COLS = 8;
const ROWS = 5;
const CELL_W = 30;
const CELL_H = 27;
const GAP = 3;
const X0 = 42;
const Y0 = 34;

/** Microben: vaste posities rond het doek (deterministisch, geen random). */
const MICROBEN = [
  { cx: 285, cy: 175, r: 5, d: 0.2 },
  { cx: 262, cy: 122, r: 4, d: 1.1 },
  { cx: 240, cy: 188, r: 6, d: 0.6 },
  { cx: 205, cy: 150, r: 4, d: 1.7 },
  { cx: 172, cy: 182, r: 5, d: 2.3 },
  { cx: 140, cy: 120, r: 4, d: 2.9 },
  { cx: 108, cy: 170, r: 5, d: 3.4 },
  { cx: 90, cy: 105, r: 4, d: 3.9 },
] as const;

export function AfbraakAnimatie() {
  const cellen = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      // Golf vanaf rechtsonder: verre kolommen en lage rijen gaan eerst.
      const delay = ((COLS - 1 - c) * 0.45 + (ROWS - 1 - r) * 0.3).toFixed(2);
      cellen.push(
        <rect
          key={`${r}-${c}`}
          className={styles.cel}
          style={{ ["--d" as string]: `${delay}s` }}
          x={X0 + c * (CELL_W + GAP)}
          y={Y0 + r * (CELL_H + GAP)}
          width={CELL_W}
          height={CELL_H}
          rx={4}
          data-toon={(r + c) % 3}
        />,
      );
    }
  }

  return (
    <svg
      viewBox="0 0 320 240"
      className={styles.scene}
      role="img"
      aria-label="Animatie: het vlaggendoek wordt cel voor cel afgebroken door micro-organismen"
    >
      {/* Bodemlijn waar de vezels in opgaan. */}
      <line
        x1={16}
        y1={224}
        x2={304}
        y2={224}
        className={styles.bodem}
        strokeDasharray="3 6"
      />
      {/* Mast blijft staan: het verhaal gaat over het doek. */}
      <rect x={26} y={16} width={7} height={208} rx={3.5} className={styles.mast} />
      <circle cx={29.5} cy={14} r={6} className={styles.mastKnop} />
      {cellen}
      {MICROBEN.map((m) => (
        <circle
          key={`${m.cx}-${m.cy}`}
          className={styles.microbe}
          style={{ ["--d" as string]: `${m.d}s` }}
          cx={m.cx}
          cy={m.cy}
          r={m.r}
        />
      ))}
    </svg>
  );
}
