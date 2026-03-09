"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const products = [
  {
    name: "Pros de l\u2019internet White T-Shirt",
    price: "30 USD",
    href: "https://store.locomotive.ca/products/pros-de-linternet-white-t-shirt",
    image: "/images/project-15.jpg",
  },
  {
    name: "Pros de l\u2019internet Sand Hat",
    price: "25 USD",
    href: "https://store.locomotive.ca/products/pros-de-linternet-beige-hat",
    image: "/images/project-14.jpg",
  },
];

export default function Store() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".store-card");
    cards?.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: i * 0.12,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
        }}
      >
        <h2 className="text-display">Store</h2>
        <a
          href="https://store.locomotive.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-label"
          style={{
            color: "var(--color-text-muted)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "color 0.3s",
          }}
        >
          Check out our gear ↗
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
        }}
      >
        {products.map((product) => (
          <a
            key={product.name}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="store-card group"
            data-cursor-label="Buy"
            style={{ display: "block", cursor: "none" }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "9/10",
                overflow: "hidden",
                borderRadius: "6px",
                background: "#1a1a1a",
                marginBottom: "1rem",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="group-hover:scale-105"
              />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 400,
                marginBottom: "0.3rem",
              }}
            >
              {product.name}
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="text-label" style={{ color: "var(--color-text-muted)" }}>
                {product.price}
              </span>
              <span
                className="text-label"
                style={{
                  color: "var(--color-accent)",
                  transition: "transform 0.3s",
                }}
              >
                Buy now →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
