"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const titleLines = ["Motion-led", "Digital", "Experiences"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = heroRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(title.querySelectorAll(".hero-word"), {
      y: "105%",
      opacity: 0,
      duration: 1.3,
      ease: "power4.out",
      stagger: 0.08,
    })
      .from(
        section.querySelectorAll(".hero-fade"),
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.08,
        },
        "-=0.9"
      )
      .from(
        ".hero-card",
        {
          opacity: 0,
          y: 30,
          scale: 0.96,
          duration: 1,
        },
        "-=0.7"
      );

    gsap.to(".hero-video-wrap", {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(title, {
      opacity: 0.2,
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "65% top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={heroRef} data-scroll-section className="hero-section">
      <div className="hero-video-wrap">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster_desktop.png"
          className="hero-video"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-shell">
        <div className="hero-topline hero-fade">
          <span className="text-label">Independent design & development studio</span>
          <span className="text-label">Montréal / Worldwide</span>
        </div>

        <div className="hero-main">
          <div>
            <p className="hero-kicker hero-fade">Selected work, art direction, strategy and immersive web builds.</p>
            <h1 ref={titleRef} className="text-hero hero-title">
              {titleLines.map((line) => (
                <span key={line} className="hero-line-wrap">
                  <span className="hero-word">{line}</span>
                </span>
              ))}
            </h1>
          </div>

          <aside className="hero-card">
            <p className="text-label" style={{ marginBottom: "1rem" }}>
              Current focus
            </p>
            <p className="hero-card__copy">
              Rebuilding a premium agency landing page with cinematic pacing, layered typography and portfolio-driven storytelling.
            </p>
            <div className="hero-card__meta">
              <span>UI systems</span>
              <span>Motion</span>
              <span>Responsive build</span>
            </div>
          </aside>
        </div>

        <div className="hero-bottom hero-fade">
          <div className="hero-scroll-hint">
            <div className="hero-scroll-hint__line" />
            <span className="text-label">Scroll to explore</span>
          </div>
          <a href="#work" className="hero-pill">
            View featured work
          </a>
        </div>
      </div>
    </section>
  );
}
