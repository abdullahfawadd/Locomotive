"use client";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/lib/types";
import VideoCard from "@/components/ui/VideoCard";

const projects: Project[] = [
  {
    id: "1",
    title: "Theory Verse",
    client: "Theory Verse",
    year: "2024",
    category: "Web Design",
    thumbnail: "/images/project-1.jpg",
    video: "/videos/hero-reel.mp4",
    href: "#",
    aspect: "landscape",
  },
  {
    id: "2",
    title: "Scout Motors",
    client: "Scout Motors",
    year: "2024",
    category: "Digital Experience",
    thumbnail: "/images/project-2.jpg",
    href: "#",
    aspect: "portrait",
  },
  {
    id: "3",
    title: "Populous",
    client: "Populous",
    year: "2024",
    category: "Branding",
    thumbnail: "/images/project-3.jpg",
    href: "#",
    aspect: "landscape",
  },
  {
    id: "4",
    title: "Mate Libre",
    client: "Mate Libre",
    year: "2023",
    category: "E-Commerce",
    thumbnail: "/images/project-4.jpg",
    video: "/videos/hero-reel.mp4",
    href: "#",
    aspect: "portrait",
  },
  {
    id: "5",
    title: "Destigmatize",
    client: "Destigmatize",
    year: "2023",
    category: "Interactive",
    thumbnail: "/images/project-5.jpg",
    href: "#",
    aspect: "landscape",
  },
  {
    id: "6",
    title: "Design Canada",
    client: "Design Canada",
    year: "2023",
    category: "Web App",
    thumbnail: "/images/project-10.jpg",
    href: "#",
    aspect: "square",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".work-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: (i % 3) * 0.15,
      });
    });
  }, []);

  // Editorial column spans for asymmetric grid
  const spans = [
    "1 / 8",  // wide left
    "8 / 13", // narrow right
    "1 / 6",  // narrow left
    "6 / 13", // wide right
    "1 / 7",  // half
    "7 / 13", // half
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      data-scroll-section
      style={{
        padding: "var(--space-xl) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
        }}
      >
        <div>
          <p className="text-label" style={{ marginBottom: "0.8rem" }}>
            Selected work
          </p>
          <h2 className="text-display">Featured Projects</h2>
        </div>
        <a
          href="#"
          className="text-label"
          style={{
            color: "var(--color-text-muted)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          View all work
        </a>
      </div>

      {/* Projects grid */}
      <div
        className="work-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "clamp(1rem, 2vw, 2rem)",
          rowGap: "clamp(2rem, 4vw, 4rem)",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            style={{ gridColumn: spans[i] || "span 6" }}
            className="work-grid-item"
          >
            <VideoCard project={project} />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid-item {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
