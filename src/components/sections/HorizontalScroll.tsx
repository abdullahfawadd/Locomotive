"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const slides = [
  {
    number: "01",
    title: "Strategy",
    text: "We start with discovery — understanding your brand, audience, and goals before a single pixel is placed.",
  },
  {
    number: "02",
    title: "Design",
    text: "Every interface we craft is a balance of beauty and intent. Precise, purposeful, and built to last.",
  },
  {
    number: "03",
    title: "Build",
    text: "From React to WebGL, our engineers bring designs to life with performance and scalability at the core.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We don't just ship — we monitor, iterate, and optimize. Launch is the beginning, not the end.",
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="process"
      data-scroll-section
      style={{
        overflow: "hidden",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: "fit-content",
          alignItems: "center",
          padding: "0 clamp(1.5rem, 4vw, 4rem)",
          gap: "4vw",
          height: "100vh",
        }}
      >
        {/* Intro slide */}
        <div style={{ minWidth: "30vw", flexShrink: 0, paddingRight: "4vw" }}>
          <p className="text-label" style={{ marginBottom: "1rem" }}>
            Our process
          </p>
          <h2 className="text-display">How we work</h2>
        </div>

        {/* Process slides */}
        {slides.map((slide) => (
          <div
            key={slide.number}
            style={{
              minWidth: "min(35vw, 500px)",
              flexShrink: 0,
              padding: "3rem",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              height: "60vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 8rem)",
                fontWeight: 200,
                color: "var(--color-text-muted)",
                lineHeight: 1,
                opacity: 0.3,
              }}
            >
              {slide.number}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 4rem)",
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {slide.title}
              </h3>
              <p
                className="text-body-lg"
                style={{
                  color: "var(--color-text-muted)",
                  maxWidth: "40ch",
                }}
              >
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
