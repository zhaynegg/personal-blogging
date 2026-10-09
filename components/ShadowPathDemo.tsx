"use client";

import { useState } from "react";
import ProjectPreview from "./ProjectPreview";
import styles from "./ShadowPathDemo.module.css";

const buildings = [
  { x: 26, y: 24, width: 45, height: 45 },
  { x: 88, y: 24, width: 48, height: 45 },
  { x: 184, y: 24, width: 54, height: 43 },
  { x: 256, y: 24, width: 52, height: 43 },
  { x: 357, y: 23, width: 53, height: 43 },
  { x: 428, y: 23, width: 62, height: 43 },
  { x: 25, y: 119, width: 45, height: 65 },
  { x: 88, y: 118, width: 48, height: 65 },
  { x: 184, y: 116, width: 53, height: 68 },
  { x: 256, y: 118, width: 52, height: 43 },
  { x: 537, y: 115, width: 37, height: 68 },
  { x: 590, y: 115, width: 33, height: 43 },
  { x: 26, y: 235, width: 46, height: 30 },
  { x: 99, y: 235, width: 36, height: 30 },
  { x: 185, y: 235, width: 52, height: 30 },
  { x: 256, y: 235, width: 52, height: 30 },
  { x: 357, y: 235, width: 62, height: 30 },
  { x: 438, y: 235, width: 50, height: 30 },
];

const route = "M77 208 H146 Q158 208 158 196 V102 Q158 90 170 90 H502 Q514 90 514 78 V70 Q514 58 526 58 H563";

export default function ShadowPathDemo() {
  const [connected, setConnected] = useState(false);

  function toggleRoute() {
    setConnected((current) => !current);
  }

  return (
    <ProjectPreview
      address="shadow-path"
      title="A little walk from A to B."
      instruction="Click the map to connect the dots."
      status={connected ? "Route ready · A to B" : "Schematic map · two points"}
      actionLabel={connected ? "Try again" : "Find route"}
      actionSymbol={connected ? "↺" : "→"}
      onAction={toggleRoute}
    >
      <button
        type="button"
        className={styles.mapButton}
        aria-label={
          connected
            ? "Reset the Shadow-path map preview"
            : "Connect points A and B on the Shadow-path map preview"
        }
        aria-pressed={connected}
        onClick={toggleRoute}
      >
        <svg
          viewBox="0 0 640 280"
          className={styles.map}
          aria-hidden="true"
        >
          <rect width="640" height="280" className={styles.ground} />

          <path
            d="M0 90 H640 M0 208 H640 M158 0 V280 M332 0 V280 M514 0 V280 M514 58 H640"
            className={styles.streets}
          />
          <path
            d="M0 90 H640 M0 208 H640 M158 0 V280 M332 0 V280 M514 0 V280 M514 58 H640"
            className={styles.streetLines}
          />

          <rect x="356" y="116" width="133" height="68" rx="10" className={styles.park} />
          <path d="M374 166 C390 133 432 164 470 132" className={styles.parkPath} />
          <path
            d="M367 129 Q377 113 389 130 Q383 148 367 129 M441 163 Q454 144 470 160 Q457 182 441 163"
            className={styles.canopies}
          />
          <text x="421" y="152" textAnchor="middle" className={styles.parkLabel}>PARK</text>

          {buildings.map(({ x, y, width, height }) => (
            <g key={`${x}-${y}`}>
              <path
                d={`M${x} ${y + height} L${x + 13} ${y + height + 14} H${x + width + 13} V${y + 14} L${x + width} ${y} Z`}
                className={styles.shadow}
              />
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx="3"
                className={styles.building}
              />
              <path
                d={`M${x + 8} ${y + 8} H${x + width - 8}`}
                className={styles.roofLine}
              />
            </g>
          ))}

          {connected && (
            <g>
              <path d={route} pathLength="1" className={styles.routeHalo} />
              <path d={route} pathLength="1" className={styles.route} />
            </g>
          )}

          <g className={styles.endpoint}>
            <circle cx="77" cy="208" r="14" />
            <text x="77" y="208" textAnchor="middle" dominantBaseline="central">A</text>
          </g>
          <g className={styles.endpoint}>
            <circle cx="563" cy="58" r="14" />
            <text x="563" y="58" textAnchor="middle" dominantBaseline="central">B</text>
          </g>

          <g className={styles.compass}>
            <text x="596" y="235" textAnchor="middle">N</text>
            <path d="M596 263 V244 M591 249 L596 244 L601 249" />
          </g>
        </svg>
      </button>
    </ProjectPreview>
  );
}
