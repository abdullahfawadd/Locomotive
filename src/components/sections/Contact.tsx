"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    gsap.from(heading.querySelectorAll(".contact-word"), {
      y: "100%",
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      style={{
        padding: "var(--space-2xl) clamp(1.5rem, 4vw, 4rem) var(--space-xl)",
        background: "var(--color-bg)",
        textAlign: "center",
      }}
    >
      <p className="text-label" style={{ marginBottom: "2rem" }}>
        Let&apos;s collaborate
      </p>

      <h2
        ref={headingRef}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 12vw, 14rem)",
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          marginBottom: "3rem",
        }}
      >
        <span style={{ display: "inline-block", overflow: "hidden" }}>
          <span className="contact-word" style={{ display: "inline-block" }}>
            Let&apos;s&nbsp;
          </span>
        </span>
        <span style={{ display: "inline-block", overflow: "hidden" }}>
          <span className="contact-word" style={{ display: "inline-block", color: "var(--color-accent)" }}>
            talk.
          </span>
        </span>
      </h2>

      <a
        href="mailto:info@locomotive.ca"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
          fontWeight: 300,
          color: "var(--color-text-muted)",
          textDecoration: "underline",
          textUnderlineOffset: "8px",
          textDecorationColor: "var(--color-border)",
          transition: "color 0.3s, text-decoration-color 0.3s",
        }}
        className="hover:text-white!"
      >
        info@locomotive.ca
      </a>

      <div style={{ marginTop: "3rem" }}>
        <a
          href="tel:+15145245678"
          className="text-label"
          style={{ color: "var(--color-text-muted)" }}
        >
          +1 514 524 5678
        </a>
      </div>
    </section>
  );
}
