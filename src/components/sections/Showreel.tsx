"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // Play video when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);

    // Scale up reveal on scroll
    gsap.from(".showreel-video-container", {
      scale: 0.85,
      borderRadius: "24px",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      style={{
        padding: "var(--space-lg) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p className="text-label" style={{ marginBottom: "0.5rem" }}>Showreel</p>
          <h2 className="text-heading">Our latest work in motion</h2>
        </div>
        <span className="text-label" style={{ color: "var(--color-text-muted)" }}>2024</span>
      </div>

      <div
        className="showreel-video-container"
        data-cursor-label="Play"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          borderRadius: "8px",
          background: "#111",
          cursor: "none",
        }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/poster_desktop.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>

        {/* Play button overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.2)",
            opacity: 1,
            transition: "opacity 0.4s",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
              <polygon points="0,0 20,12 0,24" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
