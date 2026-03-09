"use client";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial page load: slide overlay down
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { yPercent: 0 });
      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        delay: 0.2,
        ease: "power4.inOut",
      });
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="page-transition"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--color-accent)",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
