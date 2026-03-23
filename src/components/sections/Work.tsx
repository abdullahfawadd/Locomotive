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
  category: string;
  summary: string;
}

const projects: FeaturedProject[] = [
  {
    id: "theory-verse",
    title: "Theory Verse",
    href: "https://locomotive.ca/en/work/theory-verse",
    thumbnail: "/images/project-1.jpg",
    span: "1 / 8",
    mobileOrder: 1,
    category: "Brand world / interactive showcase",
    summary: "A cinematic landing experience built to reveal story, dimension and product depth through motion.",
  },
  {
    id: "scout-motors",
    title: "Scout Motors",
    href: "https://locomotive.ca/en/work/scout-motors",
    thumbnail: "/images/project-2.jpg",
    span: "8 / 13",
    mobileOrder: 2,
    category: "Automotive / product platform",
    summary: "Editorial product storytelling layered with performance-conscious interactions and scalable components.",
  },
  {
    id: "populous",
    title: "Populous",
    href: "https://locomotive.ca/en/work/populous",
    thumbnail: "/images/project-3.jpg",
    span: "1 / 6",
    mobileOrder: 3,
    category: "Culture / digital identity",
    summary: "A visual system where typography, mood and movement establish a memorable digital voice.",
  },
  {
    id: "mate-libre",
    title: "Mate Libre",
    href: "https://locomotive.ca/en/work/mate-libre",
    thumbnail: "/images/project-4.jpg",
    span: "6 / 13",
    mobileOrder: 4,
    category: "Consumer / campaign storytelling",
    summary: "A bold interface designed to feel tactile, bright and unmistakably editorial across every breakpoint.",
  },
  {
    id: "destigmatize",
    title: "Destigmatize",
    href: "https://locomotive.ca/en/work/destigmatize",
    thumbnail: "/images/project-5.jpg",
    span: "3 / 11",
    mobileOrder: 5,
    category: "Non-profit / narrative design",
    summary: "A more restrained visual rhythm that lets message, empathy and accessibility lead the experience.",
  },
];

function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      delay: (index % 2) * 0.12,
    });
  }, [index]);

  return (
    <div ref={cardRef} className="work-card-item" style={{ gridColumn: project.span, order: project.mobileOrder }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        data-cursor-label="View"
        style={{ display: "block", cursor: "none" }}
      >
        <div className="work-card-media" style={{ aspectRatio: index === 1 || index === 3 ? "3/4" : "16/10" }}>
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
          <div className="work-card-media__overlay" />
        </div>

        <div className="work-card-copy">
          <p className="text-label" style={{ marginBottom: "0.65rem", color: "var(--color-accent)" }}>
            {project.category}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <h3 className="work-card-title">{project.title}</h3>
            <span className="work-card-link">Read more →</span>
          </div>
          <p className="work-card-summary">{project.summary}</p>
        </div>
      </a>
    </div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="work" data-scroll-section className="section-shell">
      <div className="section-grid-two section-rule section-rule--tight">
        <div>
          <p className="text-label" style={{ marginBottom: "0.8rem" }}>
            Featured work
          </p>
          <h2 className="text-display" style={{ maxWidth: "10ch" }}>
            A portfolio designed to feel immersive from the first fold onward.
          </h2>
        </div>
        <div style={{ maxWidth: "34rem", justifySelf: "end" }}>
          <p className="text-body-lg" style={{ color: "var(--color-text-muted)", marginBottom: "1.25rem" }}>
            The grid below pushes the current build closer to a premium studio homepage: staggered proportions, strong editorial hierarchy and image-led storytelling.
          </p>
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
      </div>

      <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(1rem, 2vw, 2rem)", rowGap: "clamp(3rem, 5vw, 5rem)" }}>
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
