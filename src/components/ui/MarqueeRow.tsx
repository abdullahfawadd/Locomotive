"use client";

interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
}

export default function MarqueeRow({ items, reverse = false, speed = 30 }: MarqueeRowProps) {
  const tripled = [...items, ...items, ...items];

  return (
    <div
      className="marquee-row group"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "1rem 0",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "inline-flex",
          gap: "4rem",
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {tripled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
              fontWeight: 300,
              color: i % 4 === 0 ? "var(--color-text)" : "var(--color-text-muted)",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
