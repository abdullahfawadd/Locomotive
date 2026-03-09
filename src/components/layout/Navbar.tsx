"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "power4.out",
    });
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(1.5rem, 4vw, 4rem)",
          mixBlendMode: "difference",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "1.15rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "var(--color-text)",
            marginRight: "auto",
            fontFamily: "var(--font-display)",
          }}
        >
          Locomotive<span style={{ color: "var(--color-accent)" }}>®</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="nav-link">
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="nav-cta">
              Start a project
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="nav-hamburger"
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--color-text)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              transition: "transform 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--color-text)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--color-text)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              transition: "transform 0.3s",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--color-bg)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(2rem, 8vw, 6rem)",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.7s var(--ease-out-expo)",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-menu-link"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  display: "block",
                  transform: menuOpen ? "translateY(0)" : "translateY(100%)",
                  transition: `transform 0.6s ${i * 0.08}s var(--ease-out-expo)`,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "3rem" }}>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-label"
            style={{ color: "var(--color-accent)", letterSpacing: "0.1em" }}
          >
            Start a project →
          </Link>
        </div>
      </div>
    </>
  );
}
