"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/locomotivemtl/" },
  { label: "Twitter", href: "https://twitter.com/locomotivemtl" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/locomotive-mtl" },
  { label: "GitHub", href: "https://github.com/locomotivemtl" },
  { label: "Behance", href: "https://www.behance.net/locomotivemtl" },
];

export default function Footer() {
  const ctaRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(ctaRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      data-scroll-section
      style={{
        background: "var(--color-bg-secondary)",
        padding: "var(--space-xl) clamp(1.5rem, 4vw, 4rem) var(--space-md)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Big CTA */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <p className="text-label" style={{ marginBottom: "2rem" }}>
          Ready to create something great?
        </p>
        <h2
          ref={ctaRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 10vw, 12rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: "3rem",
          }}
        >
          Let&apos;s work<br />
          <span style={{ color: "var(--color-accent)" }}>together.</span>
        </h2>
        <a
          href="mailto:info@locomotive.ca"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            fontWeight: 300,
            color: "var(--color-text-muted)",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            transition: "color 0.3s",
          }}
          className="hover:text-white!"
        >
          info@locomotive.ca
        </a>
      </div>

      {/* Address */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          marginBottom: "var(--space-lg)",
          paddingTop: "2rem",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div>
          <p className="text-label" style={{ marginBottom: "0.8rem" }}>Location</p>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            1211 Jean-Talon Est<br />
            Montréal (QC), Canada<br />
            H2R 1W1
          </p>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.8rem" }}>Contact</p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <a href="tel:+15145245678" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}>
              +1 514 524 5678
            </a>
            <br />
            <a href="mailto:info@locomotive.ca" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}>
              info@locomotive.ca
            </a>
          </p>
        </div>
        <div>
          <p className="text-label" style={{ marginBottom: "0.8rem" }}>Follow</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p className="text-label">© 2008–{new Date().getFullYear()} Locomotive®</p>
        <button
          onClick={scrollToTop}
          className="text-label"
          style={{
            color: "var(--color-text-muted)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
