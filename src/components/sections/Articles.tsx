"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const articles = [
  {
    title: "Locomotive x Lightship : Innovation Needs a Companion",
    href: "https://medium.com/@LocomotiveMTL/lightship-x-locomotive-innovation-needs-a-companion-6bae307882a8",
  },
  {
    title: "Locomotive x Chivalry: How We Became More Than Just Collaborators",
    href: "https://medium.com/@LocomotiveMTL/locomotive-x-chivalry-how-we-became-more-than-just-collaborators-a0338dac16fc",
  },
  {
    title: "Should I use Locomotive Scroll on my project?",
    href: "https://medium.com/@LocomotiveMTL/should-i-use-locomotive-scroll-on-my-project-7fc8fa38bcc5",
  },
  {
    title: "Why don\u2019t we use front-end frameworks at Locomotive?",
    href: "https://medium.com/@LocomotiveMTL/why-dont-we-use-front-end-frameworks-at-locomotive-4ccb20c05bc5",
  },
  {
    title: "The revolution of the workspace as we know it",
    href: "https://medium.com/@LocomotiveMTL/the-revolution-of-the-workspace-as-we-know-it-6e50c4bc1b2",
  },
  {
    title: "A few things your UX designer can learn from your shrink",
    href: "https://medium.com/@LocomotiveMTL/a-few-things-your-ux-designer-can-learn-from-your-shrink-locomotive-style-8a8de62c841",
  },
];

export default function Articles() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".article-item");
    items?.forEach((item) => {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
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
        background: "var(--color-bg-secondary)",
      }}
    >
      <div
        style={{
          marginBottom: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
        }}
      >
        <h2 className="text-display">Articles</h2>
      </div>

      <div>
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="article-item group"
            data-cursor-label="Read"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
              padding: "1.5rem 0",
              borderBottom: "1px solid var(--color-border)",
              cursor: "none",
              transition: "padding-left 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
                fontWeight: 400,
                color: "var(--color-text-muted)",
                transition: "color 0.4s",
                lineHeight: 1.3,
              }}
              className="group-hover:!text-[var(--color-text)]"
            >
              {article.title}
            </p>
            <span
              style={{
                fontSize: "1.2rem",
                color: "var(--color-text-muted)",
                flexShrink: 0,
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s",
              }}
              className="group-hover:translate-x-1 group-hover:!text-[var(--color-accent)]"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
