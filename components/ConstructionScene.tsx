// components/ConstructionScene.tsx
// Decoration for posts that are still being written: yellow-black barrier
// tape, a cracked concrete wall and the dust that hangs around a building
// site. Everything is plain CSS/SVG, so these stay server components.

/** A strip of classic yellow/black barrier tape. Caller positions it. */
export function HazardTape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`hazard-tape block shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.4)] ${className}`}
    />
  );
}

/** Little traffic cone, sized to sit inside a text label. */
export function ConeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      aria-hidden
      className={`h-3 w-3 ${className}`}
      fill="currentColor"
    >
      <path d="M7 1.2 3.1 11H10.9L7 1.2Z" opacity="0.9" />
      <path d="M1.3 11.4h11.4a.9.9 0 0 1 0 1.8H1.3a.9.9 0 0 1 0-1.8Z" />
    </svg>
  );
}

/* Motes are hand-picked rather than random so the server and the client
   always agree on where every speck of dust sits. */
const MOTES = [
  { left: "4%", size: 5, delay: 0, duration: 19, drift: "4rem", rise: "70svh", peak: 0.4 },
  { left: "11%", size: 9, delay: 6, duration: 26, drift: "-3rem", rise: "85svh", peak: 0.26 },
  { left: "17%", size: 3, delay: 2, duration: 15, drift: "5rem", rise: "60svh", peak: 0.5 },
  { left: "23%", size: 7, delay: 11, duration: 23, drift: "2rem", rise: "78svh", peak: 0.3 },
  { left: "29%", size: 4, delay: 4, duration: 17, drift: "-5rem", rise: "66svh", peak: 0.45 },
  { left: "35%", size: 11, delay: 14, duration: 29, drift: "3rem", rise: "90svh", peak: 0.2 },
  { left: "41%", size: 3, delay: 8, duration: 16, drift: "-2rem", rise: "58svh", peak: 0.5 },
  { left: "47%", size: 6, delay: 18, duration: 21, drift: "4rem", rise: "74svh", peak: 0.34 },
  { left: "52%", size: 4, delay: 1, duration: 18, drift: "-4rem", rise: "64svh", peak: 0.44 },
  { left: "58%", size: 9, delay: 9, duration: 27, drift: "2rem", rise: "88svh", peak: 0.24 },
  { left: "63%", size: 3, delay: 20, duration: 14, drift: "6rem", rise: "55svh", peak: 0.52 },
  { left: "68%", size: 7, delay: 5, duration: 24, drift: "-3rem", rise: "80svh", peak: 0.3 },
  { left: "72%", size: 12, delay: 13, duration: 31, drift: "4rem", rise: "95svh", peak: 0.18 },
  { left: "76%", size: 4, delay: 3, duration: 17, drift: "-6rem", rise: "62svh", peak: 0.46 },
  { left: "80%", size: 6, delay: 16, duration: 22, drift: "3rem", rise: "76svh", peak: 0.32 },
  { left: "84%", size: 3, delay: 7, duration: 15, drift: "-2rem", rise: "57svh", peak: 0.5 },
  { left: "88%", size: 10, delay: 22, duration: 28, drift: "2rem", rise: "86svh", peak: 0.22 },
  { left: "92%", size: 5, delay: 10, duration: 20, drift: "-4rem", rise: "70svh", peak: 0.4 },
  { left: "96%", size: 7, delay: 15, duration: 25, drift: "3rem", rise: "82svh", peak: 0.28 },
  { left: "45%", size: 8, delay: 24, duration: 30, drift: "-5rem", rise: "92svh", peak: 0.22 },
  { left: "26%", size: 5, delay: 19, duration: 21, drift: "5rem", rise: "72svh", peak: 0.38 },
  { left: "66%", size: 4, delay: 25, duration: 19, drift: "-3rem", rise: "68svh", peak: 0.42 },
];

/** Specks of dust drifting up off the site, plus a slow haze low down. */
export function DustField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="dust-haze absolute inset-x-[-10%] bottom-[-20%] h-3/4" />

      {MOTES.map((mote) => (
        <span
          key={mote.left + mote.delay}
          className="dust-mote absolute bottom-[-3rem] rounded-full bg-[#e6dcc7]"
          style={
            {
              left: mote.left,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              filter: mote.size > 6 ? "blur(2px)" : "blur(0.5px)",
              animationDelay: `-${mote.delay}s`,
              animationDuration: `${mote.duration}s`,
              "--dust-x": mote.drift,
              "--dust-rise": mote.rise,
              "--dust-peak": mote.peak,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* Plaster blown off the wall, and the brickwork it leaves behind. */
const HOLE =
  "1080,380 1024,432 1038,519 935,496 880,546 790,571 784,464 692,448 708,380 668,303 774,287 805,222 880,191 934,267 1050,232 1046,320";
const HOLE_DEPTH =
  "1015,380 1023,452 933,459 880,517 820,470 731,455 768,380 750,315 816,284 880,234 934,299 1003,318";

const CRACKS = [
  "M1080,380 1132,350 1178,372 1200,346",
  "M880,191 861,138 889,94 866,38 879,0",
  "M668,303 600,289 556,315 470,295 432,321 360,299 300,323 210,305 140,331 60,311 0,337",
  "M790,571 759,627 700,651 663,713 605,741 580,800",
  "M935,496 973,557 1030,585 1057,651 1119,691 1139,761 1180,800",
  "M556,315 534,372 486,404 470,470",
  "M300,323 286,392 236,430 232,500",
  "M1132,350 1128,282 1163,232",
  "M110,44 168,110 149,183 208,246 192,320",
];

/** A blown-out concrete wall: gritty plaster, cracks, brick behind the hole. */
export function CrackedWall({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id="wall-plaster" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#4c5057" />
          <stop offset="0.55" stopColor="#343841" />
          <stop offset="1" stopColor="#23262d" />
        </linearGradient>

        <pattern
          id="wall-bricks"
          width="160"
          height="72"
          patternUnits="userSpaceOnUse"
        >
          <rect width="160" height="72" fill="#1b100d" />
          <rect x="2" y="3" width="74" height="30" rx="2" fill="#553229" />
          <rect x="84" y="3" width="74" height="30" rx="2" fill="#48291f" />
          <rect x="-38" y="39" width="74" height="30" rx="2" fill="#4d2d23" />
          <rect x="44" y="39" width="74" height="30" rx="2" fill="#5b372c" />
          <rect x="124" y="39" width="74" height="30" rx="2" fill="#452720" />
        </pattern>

        <filter id="wall-grit" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>

        <radialGradient id="hole-shade" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#000" stopOpacity="0.15" />
          <stop offset="1" stopColor="#000" stopOpacity="0.8" />
        </radialGradient>

        {/* The plaster layer is punched through by the hole. */}
        <mask id="wall-hole">
          <rect width="1200" height="800" fill="#fff" />
          <polygon points={HOLE} fill="#000" />
        </mask>
      </defs>

      {/* Brickwork, only ever seen through the hole */}
      <rect width="1200" height="800" fill="url(#wall-bricks)" />
      <polygon points={HOLE_DEPTH} fill="#0d0907" opacity="0.75" />
      <rect width="1200" height="800" fill="url(#hole-shade)" />

      <g mask="url(#wall-hole)">
        <rect width="1200" height="800" fill="url(#wall-plaster)" />
        <rect
          width="1200"
          height="800"
          filter="url(#wall-grit)"
          opacity="0.42"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* Cracks: a dark line with a chipped highlight alongside it */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {CRACKS.map((d) => (
            <path key={d} d={d} stroke="#14161b" strokeWidth="3.5" />
          ))}
          {CRACKS.map((d) => (
            <path
              key={`${d}-hi`}
              d={d}
              stroke="#7d848e"
              strokeWidth="1"
              opacity="0.45"
              transform="translate(1.5 -1.5)"
            />
          ))}
        </g>
      </g>

      {/* Broken plaster edge around the hole */}
      <polygon
        points={HOLE}
        fill="none"
        stroke="#868d97"
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.45"
      />

      {/* Rubble piled along the bottom */}
      <g fill="#16181c">
        <polygon points="370,800 345,786 324,771 284,779 241,781 214,800" />
        <polygon points="905,800 934,780 986,774 1032,786 1058,800" />
        <polygon points="612,800 640,788 668,792 690,800" />
      </g>
    </svg>
  );
}
