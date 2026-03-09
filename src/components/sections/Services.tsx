"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Service } from "@/lib/types";

const services: Service[] = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Brand strategy, digital strategy, content strategy, UX research, competitive analysis, and growth planning.",
    tags: ["Brand Strategy", "UX Research", "Growth"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Brand identity, art direction, UI/UX design, motion design, illustration, and design systems.",
    tags: ["Brand Identity", "UI/UX", "Motion Design"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Front-end development, back-end development, CMS integration, e-commerce, WebGL, and interactive experiences.",
    tags: ["Front-end", "Back-end", "WebGL"],
  },
  {
    number: "04",
    title: "Content",
    description:
      "Copywriting, content creation, photography, videography, social media, and editorial direction.",
    tags: ["Copywriting", "Photography", "Video"],
  },
  {
    number: "05",
    title: "Growth",
    description:
      "SEO optimization, analytics, conversion optimization, performance monitoring, and ongoing maintenance.",
    tags: ["SEO", "Analytics", "Performance"],
  },
];

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.from(itemRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, [index]);

  return (
    <div
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "2rem 0",
        cursor: "none",
        transition: "padding 0.5s var(--ease-out-expo)",
        paddingLeft: isHovered ? "1rem" : "0",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
            fontWeight: 400,
            color: "var(--color-accent)",
            minWidth: "2rem",
            paddingTop: "0.3rem",
          }}
        >
          {service.number}
        </span>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: isHovered ? "1rem" : "0" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                transition: "color 0.3s",
                color: isHovered ? "var(--color-text)" : "var(--color-text-muted)",
              }}
            >
              {service.title}
            </h3>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.4s var(--ease-out-expo)",
                flexShrink: 0,
              }}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div
            style={{
              maxHeight: isHovered ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.6s var(--ease-out-expo), opacity 0.4s",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                maxWidth: "50ch",
                marginBottom: "1rem",
              }}
            >
              {service.description}
            </p>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-label"
                  style={{
                    padding: "0.3rem 0.8rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "100px",
                    fontSize: "0.65rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Background image on hover
  const bgImages = [
    "/images/project-7.jpg",
    "/images/project-8.jpg",
    "/images/project-9.jpg",
    "/images/project-10.jpg",
    "/images/project-11.jpg",
  ];

  useEffect(() => {
    const el = sectionRef.current;
    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      data-scroll-section
      style={{
        position: "relative",
        padding: "var(--space-xl) clamp(1.5rem, 4vw, 4rem)",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* Background image that changes on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transition: "opacity 0.6s",
          opacity: activeIndex >= 0 ? 0.06 : 0,
        }}
      >
        {bgImages.map((img, i) => (
          <img
            key={img}
            src={img}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
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
          <div>
            <p className="text-label" style={{ marginBottom: "0.8rem" }}>
              What we do
            </p>
            <h2 className="text-display">Services</h2>
          </div>
        </div>

        {/* Services list */}
        <div>
          {services.map((service, i) => (
            <div
              key={service.number}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <ServiceItem service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
