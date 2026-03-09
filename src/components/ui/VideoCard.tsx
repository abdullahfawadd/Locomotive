"use client";
import { useRef } from "react";
import type { Project } from "@/lib/types";

interface VideoCardProps {
  project: Project;
}

export default function VideoCard({ project }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const aspectClass =
    project.aspect === "portrait"
      ? "aspect-[3/4]"
      : project.aspect === "square"
        ? "aspect-square"
        : "aspect-[16/10]";

  return (
    <div
      className="work-card group"
      data-cursor-label="View"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "none" }}
    >
      <a href={project.href}>
        <div
          className={aspectClass}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "4px",
            background: "#1a1a1a",
            marginBottom: "1.2rem",
          }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />

          {project.video && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          )}

          <span
            className="text-label"
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background: "rgba(13,13,13,0.7)",
              backdropFilter: "blur(8px)",
              padding: "0.35rem 0.8rem",
              borderRadius: "100px",
              fontSize: "0.65rem",
            }}
          >
            {project.category}
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p className="text-label" style={{ marginBottom: "0.3rem" }}>
              {project.client}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                fontWeight: 400,
                color: "var(--color-text)",
              }}
            >
              {project.title}
            </h3>
          </div>
          <span className="text-label">{project.year}</span>
        </div>
      </a>
    </div>
  );
}
