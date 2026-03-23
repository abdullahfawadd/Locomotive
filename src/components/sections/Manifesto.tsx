"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const pillars = [
  {
    title: "Editorial pacing",
    text: "Large-scale type, generous negative space and measured movement shape each scene on the page.",
  },
  {
    title: "Intentional motion",
    text: "Animation is used to create rhythm and clarity, not noise. Every transition supports the story.",
  },
  {
    title: "Crafted systems",
    text: "Design decisions scale through reusable components, clean grids and production-ready front-end details.",
  },
];

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".manifesto-item");
    if (!items?.length) return;

    gsap.from(items, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="section-shell"
      style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-xl)" }}
    >
      <div className="section-rule" style={{ marginBottom: "var(--space-lg)" }}>
        <p className="text-label" style={{ marginBottom: "0.8rem" }}>
          Practice rebuild
        </p>
        <h2 className="text-display" style={{ maxWidth: "11ch" }}>
          An original front-end study inspired by premium studio portfolios.
        </h2>
      </div>

      <div className="manifesto-grid">
        {pillars.map((pillar, index) => (
          <article key={pillar.title} className="manifesto-item manifesto-card">
            <span className="manifesto-card__index">0{index + 1}</span>
            <h3 className="manifesto-card__title">{pillar.title}</h3>
            <p className="manifesto-card__text">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
