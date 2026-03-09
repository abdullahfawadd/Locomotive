"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    const words = titleRef.current?.querySelectorAll(".word");

    tl.from(words || [], {
      y: "100%",
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.06,
    })
      .from(
        ".hero-eyebrow",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=1"
      )
      .from(
        ".hero-scroll-hint",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      );

    // Parallax on scroll
    gsap.to(".hero-video-wrap", {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Fade out title on scroll
    gsap.to(titleRef.current, {
      opacity: 0,
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "60% top",
        scrub: 1,
      },
    });
  }, []);

  const words = [
    "Digital-first",
    "Design",
    "Agency",
  ];

  return (
    <section
      ref={heroRef}
      data-scroll-section
      style={{
        position: "relative",
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 clamp(1.5rem, 4vw, 4rem) clamp(3rem, 6vw, 5rem)",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
    >
      {/* Background Video */}
      <div
        className="hero-video-wrap"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster_desktop.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.6) 60%, rgba(13,13,13,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow label */}
        <p className="hero-eyebrow text-label" style={{ marginBottom: "2rem" }}>
          Creative digital studio — Montréal
        </p>

        {/* Main headline */}
        <h1
          ref={titleRef}
          className="text-hero"
          style={{
            maxWidth: "16ch",
            marginBottom: "3rem",
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="split-line"
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              <span
                className="word"
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Scroll hint */}
        <div
          className="hero-scroll-hint"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--color-text-muted)",
            }}
          />
          <span className="text-label">Scroll to explore</span>
          <div className="scroll-arrow">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{ animation: "bounce 2s ease-in-out infinite" }}
            >
              <path
                d="M6 0v10M1 5l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
