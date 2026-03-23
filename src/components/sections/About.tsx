"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const studioStats = [
  { number: "15+", label: "Years refining digital craft" },
  { number: "200+", label: "Projects shaped across strategy and build" },
  { number: "30+", label: "Specialists across design, motion and code" },
  { number: "7", label: "Team trips that keep the culture sharp" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lines = section.querySelectorAll<HTMLElement>(".about-line");
    lines.forEach((line) => {
      gsap.from(line, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
        },
      });
    });

    gsap.to(".about-deco-number", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.3,
      },
    });

    gsap.to(".about-image-parallax", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-media-shell",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    gsap.from(section.querySelectorAll(".about-float-card"), {
      y: 35,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars?.trigger && section.contains(st.vars.trigger as Node)) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-scroll-section
      className="grain about-section"
    >
      <div className="about-deco-number">15</div>

      <div className="about-shell">
        <div className="section-rule" style={{ marginBottom: "var(--space-lg)" }}>
          <p className="text-label about-line" style={{ marginBottom: "0.8rem" }}>
            About the study
          </p>
          <div className="section-grid-two" style={{ alignItems: "end", gap: "2.5rem" }}>
            <h2 className="text-display about-line" style={{ maxWidth: "9ch" }}>
              Design and code work best when they move like one system.
            </h2>
            <p className="text-body-lg about-line" style={{ color: "var(--color-text-muted)", maxWidth: "34rem", justifySelf: "end" }}>
              This build leans into the same principles that make high-end portfolio sites feel memorable: strong hierarchy, measured pacing, layered media and enough restraint to let the work breathe.
            </p>
          </div>
        </div>

        <div className="about-layout">
          <div className="about-copy-column">
            <p className="about-line about-accent-copy">
              A sharper practice build for studying editorial composition, motion rhythm and responsive front-end craft.
            </p>

            <div className="about-story-grid">
              <div className="about-story-card about-line">
                <span className="text-label">Perspective</span>
                <p>
                  The page is structured to alternate between tension and release: large immersive moments, then quieter text-led sections that reset the pace.
                </p>
              </div>
              <div className="about-story-card about-line">
                <span className="text-label">Build intent</span>
                <p>
                  Components stay reusable and production-minded so the study remains useful as reference material, not just as a visual experiment.
                </p>
              </div>
            </div>

            <div className="about-line" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#services" className="hero-pill">
                Explore services
              </a>
              <a
                href="#contact"
                className="text-label"
                style={{
                  color: "var(--color-text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  alignSelf: "center",
                }}
              >
                Jump to contact
              </a>
            </div>
          </div>

          <div className="about-media-column">
            <div className="about-media-shell">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/project-6.jpg"
                alt="Studio-inspired visual collage"
                loading="lazy"
                className="about-image-parallax about-media-image"
              />

              <div className="about-float-card about-float-card--top">
                <span className="text-label">Editorial pacing</span>
                <p>Large image fields balanced by dense, intentional copy blocks.</p>
              </div>

              <div className="about-float-card about-float-card--bottom">
                <span className="text-label">Motion principle</span>
                <p>Use movement to guide attention, not to compete with the message.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats-grid">
          {studioStats.map((stat) => (
            <article key={stat.label} className="about-line about-stat-card">
              <span className="about-stat-card__number">{stat.number}</span>
              <p className="about-stat-card__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
