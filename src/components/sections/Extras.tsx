"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Extras() {
  const countRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const count = countRef.current;
    if (!section || !count) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          gsap.from(count, {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate() {
              count.textContent = Math.round(Number(count.textContent)).toString();
            },
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      style={{
        padding: "var(--space-lg) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
          <h2 className="text-display">Extras</h2>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
              fontWeight: 300,
              color: "var(--color-text-muted)",
            }}
          >
            (<span ref={countRef}>13</span>)
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "clamp(1rem, 2vw, 2rem)",
            width: "100%",
            marginTop: "var(--space-md)",
          }}
        >
          {[
            { title: "Locomotive Scroll", desc: "Our open-source smooth scroll library", href: "https://scroll.locomotive.ca/", img: "/images/project-12.jpg" },
            { title: "Dynasty", desc: "Seven years running — 2018–2024 Awwwards", href: "https://six.locomotive.ca/en/", img: "/images/project-13.jpg" },
            { title: "Boilerplate", desc: "Our Next.js starter for new projects", href: "https://github.com/locomotivemtl", img: "/images/project-14.jpg" },
          ].map((extra) => (
            <a
              key={extra.title}
              href={extra.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-cursor-label="Open"
              style={{
                display: "block",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.4s",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  background: "#1a1a1a",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={extra.img}
                  alt={extra.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="group-hover:scale-105"
                />
              </div>
              <div style={{ padding: "1rem 1.2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    marginBottom: "0.3rem",
                  }}
                >
                  {extra.title} <span style={{ color: "var(--color-text-muted)" }}>↗</span>
                </h3>
                <p className="text-label" style={{ color: "var(--color-text-muted)" }}>
                  {extra.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
