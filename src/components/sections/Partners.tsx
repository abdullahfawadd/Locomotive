"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const partners = [
  "Aether Labs",
  "Northstar",
  "Monarch",
  "Signal House",
  "Atelier 08",
  "Scoutline",
  "Kindred",
  "Frameworks",
];

const recognitions = [
  "Independent studio since 2008",
  "Strategy, design & development",
  "Selected work for culture, retail and tech",
  "Motion-rich, editorial-first interfaces",
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    gsap.from(section.querySelectorAll(".partners-copy"), {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const repeatedPartners = [...partners, ...partners];

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="section-shell section-shell--muted"
      style={{ paddingTop: "var(--space-lg)", paddingBottom: "var(--space-lg)" }}
    >
      <div className="section-grid-two" style={{ alignItems: "end", marginBottom: "2rem" }}>
        <div>
          <p className="text-label partners-copy" style={{ marginBottom: "0.8rem" }}>
            Selected collaborators
          </p>
          <h2 className="text-heading partners-copy" style={{ maxWidth: "12ch" }}>
            Built with the pace of a boutique studio and the rigor of a product team.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: "0.75rem",
            maxWidth: "36rem",
            justifySelf: "end",
          }}
        >
          {recognitions.map((item) => (
            <p
              key={item}
              className="partners-copy"
              style={{
                color: "var(--color-text-muted)",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "0.75rem",
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="partners-marquee">
        <div ref={trackRef} className="partners-marquee__track">
          {repeatedPartners.map((partner, index) => (
            <span key={`${partner}-${index}`} className="partners-marquee__item">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
