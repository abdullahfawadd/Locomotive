"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { TeamMember } from "@/lib/types";

const team: TeamMember[] = [
  { name: "Frédéric Mazzella", role: "Creative Director", image: "/images/project-6.jpg" },
  { name: "Jeff Mangione", role: "Technical Director", image: "/images/project-7.jpg" },
  { name: "Mathieu Bérubé", role: "Design Lead", image: "/images/project-8.jpg" },
  { name: "Dustin Frandsen", role: "Developer", image: "/images/project-9.jpg" },
  { name: "Marie-Claude Roy", role: "Project Manager", image: "/images/project-11.jpg" },
  { name: "Sacha Moreau", role: "Motion Designer", image: "/images/project-12.jpg" },
  { name: "Bastien Music", role: "Full-Stack Developer", image: "/images/project-13.jpg" },
  { name: "Julien Lafontaine", role: "Brand Strategist", image: "/images/project-14.jpg" },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: index * 0.08,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="team-card group"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "4px",
        cursor: "none",
      }}
    >
      <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden", background: "#1a1a1a" }}>
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(0.3)",
            transition: "filter 0.5s, transform 0.7s var(--ease-out-expo)",
          }}
        />

        {/* Hover overlay */}
        <div
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "1.5rem",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 400,
              marginBottom: "0.25rem",
              transform: "translateY(10px)",
              transition: "transform 0.4s var(--ease-out-expo)",
            }}
            className="group-hover:translate-y-0"
          >
            {member.name}
          </h4>
          <p className="text-label" style={{ color: "var(--color-text-muted)" }}>
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      data-scroll-section
      style={{
        padding: "var(--space-xl) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg-secondary)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          marginBottom: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
        }}
      >
        <p className="text-label" style={{ marginBottom: "0.8rem" }}>
          The team
        </p>
        <h2 className="text-display">Always looking for top shelf talent</h2>
      </div>

      {/* Team grid */}
      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "clamp(1rem, 2vw, 2rem)",
        }}
      >
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
