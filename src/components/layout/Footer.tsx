"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const footerLinks = [
  { label: "Work", href: "https://locomotive.ca/en/work" },
  { label: "Agency", href: "https://locomotive.ca/en/agency" },
  { label: "Careers", href: "https://locomotive.ca/en/careers" },
  { label: "Let\u2019s talk", href: "https://locomotive.ca/en/contact" },
  { label: "Privacy", href: "https://locomotive.ca/en/privacy-policy" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/locomotivemtl/" },
  { label: "Twitter", href: "https://twitter.com/locomotivemtl" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/locomotive-mtl" },
  { label: "Behance", href: "https://www.behance.net/locomotivemtl" },
  { label: "GitHub", href: "https://github.com/locomotivemtl" },
];

const extraLinks = [
  { label: "Store", href: "https://store.locomotive.ca/" },
  { label: "Locomotive Scroll", href: "https://scroll.locomotive.ca/" },
  { label: "Annual trips", href: "https://explore.locomotive.ca/en" },
  { label: "Dynasty", href: "https://six.locomotive.ca/en/" },
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
      {/* Dynasty Awards Badge */}
      <div
        style={{
          marginBottom: "var(--space-xl)",
          paddingBottom: "var(--space-lg)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 200,
                color: "var(--color-text-muted)",
                lineHeight: 1.1,
              }}
            >
              Seven Years<br />Running
            </p>
            <p className="text-label" style={{ marginTop: "0.5rem", color: "var(--color-text-muted)" }}>
              2018–2024
            </p>
          </div>
          <a
            href="https://six.locomotive.ca/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label group"
            style={{
              color: "var(--color-accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "gap 0.3s",
            }}
          >
            The dynasty
            <span className="group-hover:translate-x-1" style={{ transition: "transform 0.3s" }}>→</span>
          </a>
        </div>
      </div>

      {/* Address & Contact */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "var(--space-lg)",
        }}
      >
        {/* Location */}
        <div>
          <a
            href="https://goo.gl/maps/gP8aN5aEvZd8Ejau8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.8, transition: "color 0.2s" }}
          >
            1211 Jean-Talon Est<br />
            Montréal (QC), Canada<br />
            H2R 1W1
          </a>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <a href="tel:+15145245678" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}>
              Telephone +1 514 524 5678
            </a>
            <br />
            <a href="mailto:info@locomotive.ca" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}>
              info @ locomotive.ca
            </a>
          </p>
        </div>

        {/* Pages */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social + Extras */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid var(--color-border)" }}>
              {extraLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label"
                  style={{ color: "var(--color-text-muted)", transition: "color 0.2s", display: "block", marginBottom: "0.6rem" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
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
        <p className="text-label">©2008–{new Date().getFullYear()} Locomotive®</p>
        <button
          onClick={scrollToTop}
          className="text-label"
          style={{
            color: "var(--color-text-muted)",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
