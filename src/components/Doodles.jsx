// Hand-drawn style doodles (like the sketches in the reference design), drawn on a 40x40 grid.
const glyphs = {
  code: <path d="M13 12 5 20l8 8M27 12l8 8-8 8M23 7l-6 26" />,
  braces: <path d="M15 6c-5 0-4 5-4 8 0 4-4 6-4 6s4 2 4 6c0 3-1 8 4 8M25 6c5 0 4 5 4 8 0 4 4 6 4 6s-4 2-4 6c0 3 1 8-4 8" />,
  note: <><path d="M14 29V10l16-4v19" /><ellipse cx="10" cy="29" rx="4" ry="3" /><ellipse cx="26" cy="25" rx="4" ry="3" /></>,
  bulb: <><path d="M15 27c0-4-5-6-5-12a10 10 0 0 1 20 0c0 6-5 8-5 12Z" /><path d="M16 31h8M17 35h6M20 6V2M33 9l3-3M7 9 4 6" /></>,
  cup: <><path d="M8 14h20v10a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8Z" /><path d="M28 17h3a4 4 0 0 1 0 8h-3M14 4c-2 3 2 5 0 8M20 4c-2 3 2 5 0 8" /></>,
  keyboard: <><rect x="3" y="11" width="34" height="18" rx="3" /><path d="M8 17h2M14 17h2M20 17h2M26 17h2M32 17h0M11 23h18" /></>,
  mail: <><rect x="5" y="9" width="30" height="22" rx="2" /><path d="m5 11 15 11 15-11" /></>,
  star: <path d="m20 5 4 10 10 1-8 7 3 11-9-6-9 6 3-11-8-7 10-1Z" />,
  arrow: <path d="M4 30c8-2 10-14 18-16s10 6 8 10-8 0-4-6 8-8 12-6M32 10l4 2-2 4" />,
  check: <><circle cx="20" cy="20" r="14" /><path d="m13 20 5 5 9-10" /></>,
  bug: <><ellipse cx="20" cy="23" rx="8" ry="10" /><path d="M20 13v20M14 9l3 4M26 9l-3 4M12 20H5M12 27l-6 3M28 20h7M28 27l6 3" /></>,
  gear: <><circle cx="20" cy="20" r="6" /><path d="M20 4v6M20 30v6M4 20h6M30 20h6M9 9l4 4M27 27l4 4M31 9l-4 4M13 27l-4 4" /></>,
  cloud: <path d="M11 30a7 7 0 0 1 0-14 10 10 0 0 1 19 2 6 6 0 0 1 0 12Z" />,
  train: <><rect x="9" y="5" width="22" height="24" rx="5" /><path d="M9 18h22M14 34l-3 4M26 34l3 4M15 29v3M25 29v3" /><circle cx="15" cy="24" r="1" /><circle cx="25" cy="24" r="1" /></>
};

const layouts = {
  hero: [
    ["braces", 4, 6, -12, 1.1], ["note", 26, 2, 10, 0.9], ["php", 48, 8, -8], ["code", 72, 4, 6, 1],
    ["html", 86, 22, 12], ["bulb", 2, 40, 8, 1], ["js", 14, 70, -10], ["keyboard", 84, 48, -6, 1.1],
    ["check", 80, 76, 0, 0.9], ["star", 40, 86, 15, 0.7], ["cup", 6, 86, -4, 0.9], ["arrow", 60, 90, 0, 1],
    ["gear", 92, 88, 0, 0.8], ["React", 30, 14, -6], ["Laravel", 64, 18, 8], ["bug", 94, 2, 14, 0.8]
  ],
  about: [
    ["mail", 4, 8, -8, 1], ["code", 26, 2, 6, 0.9], ["note", 52, 10, -10, 0.8], ["cup", 78, 4, 8, 1],
    ["keyboard", 88, 30, 10, 1], ["bulb", 2, 46, -6, 1], ["star", 92, 64, 12, 0.7], ["braces", 6, 82, 8, 1],
    ["deadline", 70, 88, -8], ["gear", 40, 92, 0, 0.8], ["cloud", 94, 90, 0, 0.9]
  ],
  works: [
    ["keyboard", 2, 6, -8, 1.2], ["bulb", 92, 4, 10, 1], ["code", 6, 60, 10, 1], ["note", 94, 52, -8, 0.9],
    ["star", 48, 2, 0, 0.6], ["cloud", 84, 90, 0, 1], ["braces", 2, 92, -6, 0.9], ["train", 40, 94, 6, 0.9]
  ],
  contact: [
    ["mail", 2, 10, -10, 1.1], ["arrow", 34, 4, 0, 1], ["note", 92, 6, 10, 0.9], ["star", 4, 80, 8, 0.7],
    ["bulb", 90, 82, -8, 1], ["cup", 50, 92, 4, 0.9]
  ],
  footer: [
    ["code", 6, 20, -8, 0.8], ["star", 90, 30, 10, 0.6], ["note", 80, 70, -6, 0.7], ["braces", 18, 75, 6, 0.7]
  ]
};

export default function Doodles({ variant = "hero" }) {
  return (
    <div className="doodles" aria-hidden="true">
      {layouts[variant].map(([name, x, y, rotate = 0, scale = 1], i) => {
        const style = {
          left: `${x}%`,
          top: `${y}%`,
          transform: `rotate(${rotate}deg) scale(${scale})`,
          animationDelay: `${(i % 5) * -1.6}s`
        };
        if (!glyphs[name]) {
          return (
            <span key={i} className="doodle doodle-word" style={style}>
              {name}
            </span>
          );
        }
        return (
          <svg key={i} className="doodle" style={style} viewBox="0 0 40 40">
            {glyphs[name]}
          </svg>
        );
      })}
    </div>
  );
}
