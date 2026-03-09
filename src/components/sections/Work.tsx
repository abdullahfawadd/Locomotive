"use client";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface FeaturedProject {
  id: string;
  title: string;
  href: string;
  thumbnail: string;
  span: string;
  mobileOrder: number;
}

const projects: FeaturedProject[] = [
  {
    id: "theory-verse",
    title: "Theory Verse",
    href: "https://locomotive.ca/en/work/theory-verse",
    thumbnail: "/images/project-1.jpg",
    span: "1 / 8",
    mobileOrder: 1,
  },
  {
    id: "scout-motors",
    title: "Scout Motors",
    href: "https://locomotive.ca/en/work/scout-motors",
    thumbnail: "/images/project-2.jpg",
    span: "8 / 13",
    mobileOrder: 2,
  },
  {
    id: "populous",
    title: "Populous",
    href: "https://locomotive.ca/en/work/populous",
    thumbnail: "/images/project-3.jpg",
    span: "1 / 6",
    mobileOrder: 3,
  },
  {
    id: "mate-libre",
    title: "Mate Libre",
    href: "https://locomotive.ca/en/work/mate-libre",
    thumbnail: "/images/project-4.jpg",
    span: "6 / 13",
    mobileOrder: 4,
  },
  {
    id: "destigmatize",
    title: "Destigmatize",
    href: "https://locomotive.ca/en/work/destigmatize",
    thumbnail: "/images/project-5.jpg",
    span: "3 / 11",
    mobileOrder: 5,
  },
];

function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      delay: (index % 2) * 0.15,
    });
  }, [index]);

  return (
    <div ref={cardRef} className="work-card-item" style={{ gridColumn: project.span }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        data-cursor-label="View"
        style={{ display: "block", cursor: "none" }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "4px",
            background: "#1a1a1a",
            aspectRatio: index === 1 || index === 3 ? "3/4" : "16/10",
            marginBottom: "1.2rem",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.title}
            loading={index < 2 ? "eager" : "lazy"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="group-hover:scale-105"
          />

          {/* Hover gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
              opacity: 0,
              transition: "opacity 0.5s",
            }}
            className="group-hover:opacity-100"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              fontWeight: 400,
              color: "var(--color-text)",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              transition: "color 0.3s",
            }}
            className="group-hover:!text-[var(--color-accent)]"
          >
            Read more →
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

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
        <h2 className="text-display">Featured work</h2>
        <a
          href="https://locomotive.ca/en/work"
          target="_blank"
          rel="noopener noreferrer"
          className="text-label"
          style={{
            color: "var(--color-text-muted)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "color 0.3s",
          }}
        >
          See all projects
        </a>
      </div>

      {/* Projects grid */}
      <div
        className="work-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "clamp(1rem, 2vw, 2rem)",
          rowGap: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-card-item { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}
