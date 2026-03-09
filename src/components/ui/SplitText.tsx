"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SplitTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
}

export default function SplitText({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const lines = el.querySelectorAll<HTMLElement>(".split-line-inner");

    gsap.from(lines, {
      y: "100%",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.08,
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [delay]);

  const words = children.split(" ");

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {words.map((word, i) => (
        <span key={i} className="split-line" style={{ display: "inline-block", overflow: "hidden" }}>
          <span
            className="split-line-inner"
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
