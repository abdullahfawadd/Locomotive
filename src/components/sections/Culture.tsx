"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const trips = [
  { year: "2024", place: "Locomotive in Jamaica", href: "https://explore.locomotive.ca/en/jamaica-2024" },
  { year: "2023", place: "Locomotive in Saman\u00e1", href: "https://explore.locomotive.ca/en/samana-1" },
  { year: "2022", place: "Locomotive in Playa del Carmen", href: "https://explore.locomotive.ca/en/playa" },
  { year: "2019", place: "Locomotive in Mexico", href: "https://explore.locomotive.ca/en/mexico" },
  { year: "2018", place: "Locomotive in Jamaica", href: "https://explore.locomotive.ca/en/jamaica" },
  { year: "2017", place: "Locomotive in Saman\u00e1", href: "https://explore.locomotive.ca/en/samana" },
];

export default function Culture() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".culture-item");
    items?.forEach((item, i) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: i * 0.06,
        scrollTrigger: {
          trigger: item,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      style={{
        padding: "var(--space-xl) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          marginBottom: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
        }}
      >
        <h2 className="text-display">Culture</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "clamp(1rem, 2vw, 1.5rem)",
        }}
      >
        {trips.map((trip) => (
          <a
            key={trip.year + trip.place}
            href={trip.href}
            target="_blank"
            rel="noopener noreferrer"
            className="culture-item group"
            data-cursor-label="Explore"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              padding: "1.5rem",
              border: "1px solid var(--color-border)",
              borderRadius: "6px",
              cursor: "none",
              transition: "border-color 0.4s, background 0.4s",
            }}
          >
            <span
              className="text-label"
              style={{
                color: "var(--color-accent)",
                minWidth: "3rem",
              }}
            >
              ({trip.year})
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                fontWeight: 400,
                color: "var(--color-text-muted)",
                transition: "color 0.3s",
                flex: 1,
              }}
              className="group-hover:!text-[var(--color-text)]"
            >
              {trip.place}
            </span>
            <span
              style={{
                color: "var(--color-text-muted)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
