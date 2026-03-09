"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Line-by-line text reveal
    const lines = section.querySelectorAll<HTMLElement>(".about-line");
    lines.forEach((line) => {
      gsap.from(line, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // Parallax on decorative number
    gsap.to(".about-deco-number", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Image parallax
    gsap.to(".about-image-parallax", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-image-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
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
      className="grain"
      style={{
        position: "relative",
        padding: "var(--space-xl) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg-secondary)",
        overflow: "hidden",
      }}
    >
      {/* Decorative large number */}
      <div
        className="about-deco-number"
        style={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(15rem, 30vw, 40rem)",
          fontWeight: 200,
          lineHeight: 0.8,
          color: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
        }}
      >
        15
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ marginBottom: "var(--space-lg)", borderTop: "1px solid var(--color-border)", paddingTop: "2rem" }}>
          <p className="text-label about-line" style={{ marginBottom: "1rem" }}>
            About us
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-lg)",
          }}
          className="about-grid"
        >
          {/* Text column */}
          <div style={{ maxWidth: "48ch" }}>
            <h2
              className="text-display about-line"
              style={{ marginBottom: "1rem" }}
            >
              Design and code are only tools of expression.
            </h2>
            <p
              className="about-line"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 300,
                color: "var(--color-accent)",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Always looking for top shelf talent
            </p>

            <p
              className="text-body-lg about-line"
              style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}
            >
              What sets us and our work apart is people. We&apos;re a small group
              of creative thinkers who craft bespoke digital-first brand
              identities and experiences, tailor-made for you and your audience.
            </p>

            <p
              className="text-body-lg about-line"
              style={{ color: "var(--color-text-muted)", marginBottom: "2.5rem" }}
            >
              From strategy to deployment and maintenance, we&apos;re the
              ultimate digital one-stop shop. Over the past 15 years,
              Locomotive® has become a go-to for meaningful, innovative,
              results-driven digital experiences, web design and branding.
              Freshness guaranteed.
            </p>

            <div className="about-line" style={{ display: "flex", gap: "2rem" }}>
              <a
                href="https://locomotive.ca/en/agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{
                  color: "var(--color-text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Agency →
              </a>
              <a
                href="https://locomotive.ca/en/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{
                  color: "var(--color-text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Careers →
              </a>
            </div>
          </div>

          {/* Image column */}
          <div
            className="about-image-wrap"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "4px",
              aspectRatio: "4/3",
              background: "#1a1a1a",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/project-6.jpg"
              alt="Locomotive Studio"
              loading="lazy"
              className="about-image-parallax"
              style={{
                width: "100%",
                height: "120%",
                objectFit: "cover",
                position: "absolute",
                top: "-10%",
                left: 0,
              }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            marginTop: "var(--space-lg)",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {[
            { number: "15+", label: "Years of craft" },
            { number: "200+", label: "Projects delivered" },
            { number: "30+", label: "Team members" },
            { number: "7", label: "Annual team trips" },
          ].map((stat, i) => (
            <div key={stat.label} className="about-line" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  display: "block",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.number}
              </span>
              <span className="text-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
