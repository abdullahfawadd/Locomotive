"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const label = cursorLabelRef.current;
    if (!dot || !ring || !label) return;

    // Hide on touch devices
    if ("ontouchstart" in window) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 });
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(ring, { x: ringX, y: ringY });
      raf = requestAnimationFrame(animate);
    };

    const addHoverClass = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const cursorLabel = target.dataset.cursorLabel;
      dot.classList.add("cursor--hover");
      ring.classList.add("cursor--hover");
      if (cursorLabel) {
        label.textContent = cursorLabel;
        label.style.opacity = "1";
      }
    };

    const removeHoverClass = () => {
      dot.classList.remove("cursor--hover");
      ring.classList.remove("cursor--hover");
      label.style.opacity = "0";
      label.textContent = "";
    };

    const bindHovers = () => {
      const hoverTargets = document.querySelectorAll(
        "a, button, [data-cursor], video, .work-card"
      );
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", addHoverClass);
        el.addEventListener("mouseleave", removeHoverClass);
      });
      return hoverTargets;
    };

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    // Bind after a short delay to catch dynamically rendered elements
    const timeout = setTimeout(() => bindHovers(), 500);

    // Also rebind on DOM changes
    const observer = new MutationObserver(() => bindHovers());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--color-accent)",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={cursorRingRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(240,237,230,0.6)",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      >
        <span
          ref={cursorLabelRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-text)",
            opacity: 0,
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        />
      </div>

      <style>{`
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none !important; }
        }
        .cursor-dot.cursor--hover {
          width: 0px !important;
          height: 0px !important;
        }
        .cursor-ring.cursor--hover {
          width: 80px !important;
          height: 80px !important;
          border-color: var(--color-accent) !important;
          background: rgba(255, 60, 0, 0.08);
        }
      `}</style>
    </>
  );
}
