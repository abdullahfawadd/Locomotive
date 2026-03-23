"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type ServiceItemData = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  eyebrow: string;
};

const services: ServiceItemData[] = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Discovery, positioning, UX thinking and content direction used to align the visual system with business goals before design begins.",
    tags: ["Research", "Positioning", "Content systems"],
    image: "/images/project-7.jpg",
    eyebrow: "Start with clarity",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Brand-led interfaces, motion studies, art direction and scalable component systems built to make every frame feel intentional.",
    tags: ["Art direction", "UI systems", "Motion"],
    image: "/images/project-8.jpg",
    eyebrow: "Shape the visual language",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Responsive front-end implementation, CMS integration and interaction engineering that keep the experience polished without sacrificing performance.",
    tags: ["React / Next", "CMS", "Performance"],
    image: "/images/project-9.jpg",
    eyebrow: "Make it real",
  },
  {
    number: "04",
    title: "Content",
    description:
      "Copy, stills, motion and editorial sequencing that give the interface a stronger voice and a clearer reading rhythm.",
    tags: ["Copy", "Photography", "Storytelling"],
    image: "/images/project-10.jpg",
    eyebrow: "Support the story",
  },
  {
    number: "05",
    title: "Growth",
    description:
      "Measurement, optimization and iterative updates that help the launch evolve into a durable digital product rather than a one-off moment.",
    tags: ["SEO", "Analytics", "Iteration"],
    image: "/images/project-11.jpg",
    eyebrow: "Refine after launch",
  },
];

function ServiceRow({
  service,
  isActive,
  onActivate,
}: {
  service: ServiceItemData;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      className="services-row"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      data-cursor-label="Open"
      style={{ cursor: "none" }}
    >
      <span className="services-row__number">{service.number}</span>
      <div className="services-row__body">
        <div className="services-row__titlebar">
          <h3
            className="services-row__title"
            style={{ color: isActive ? "var(--color-text)" : "var(--color-text-muted)" }}
          >
            {service.title}
          </h3>
          <span
            className="services-row__icon"
            style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            ↗
          </span>
        </div>
        <p className="services-row__description" style={{ opacity: isActive ? 1 : 0.55 }}>
          {service.description}
        </p>
      </div>
    </button>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = useMemo(() => services[activeIndex] ?? services[0], [activeIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(section.querySelectorAll(".services-reveal"), {
      y: 35,
      opacity: 0,
      duration: 0.9,
      stagger: 0.08,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars?.trigger && section.contains(st.vars.trigger as Node)) st.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" data-scroll-section className="services-section">
      <div className="services-shell">
        <div className="services-sidebar services-reveal">
          <div className="section-rule" style={{ marginBottom: "1.8rem" }}>
            <p className="text-label" style={{ marginBottom: "0.8rem" }}>
              What we do
            </p>
            <h2 className="text-display" style={{ maxWidth: "8ch" }}>
              A tighter service story with a live visual preview.
            </h2>
          </div>

          <p className="text-body-lg services-reveal" style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
            Instead of a flat accordion, this version keeps a persistent focal point on the left while the service list updates the supporting image and copy on the right.
          </p>

          <div className="services-preview-card services-reveal">
            <div className="services-preview-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeService.image}
                alt={activeService.title}
                className="services-preview-card__image"
              />
            </div>
            <div className="services-preview-card__copy">
              <p className="text-label" style={{ color: "var(--color-accent)", marginBottom: "0.7rem" }}>
                {activeService.eyebrow}
              </p>
              <h3 className="services-preview-card__title">{activeService.title}</h3>
              <p className="services-preview-card__text">{activeService.description}</p>
              <div className="services-preview-card__tags">
                {activeService.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={service.number} className="services-reveal">
              <ServiceRow
                service={service}
                isActive={activeIndex === index}
                onActivate={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
