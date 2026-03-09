"use client";
import MarqueeRow from "@/components/ui/MarqueeRow";

const clientsRow1 = [
  "Cirque du Soleil",
  "Ubisoft",
  "Desjardins",
  "Air Canada",
  "National Bank",
  "Moment Factory",
  "Sid Lee",
  "Lightspeed",
];

const clientsRow2 = [
  "Metro Inc",
  "CAE",
  "BDC",
  "Loto-Québec",
  "Savoir-faire Linux",
  "Chivalry",
  "Scout Motors",
  "Populous",
];

export default function Clients() {
  return (
    <section
      data-scroll-section
      style={{
        padding: "var(--space-xl) 0",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "0 clamp(1.5rem, 4vw, 4rem)",
          marginBottom: "var(--space-md)",
        }}
      >
        <p className="text-label">Trusted by</p>
      </div>

      <MarqueeRow items={clientsRow1} speed={35} />
      <MarqueeRow items={clientsRow2} reverse speed={40} />
    </section>
  );
}
