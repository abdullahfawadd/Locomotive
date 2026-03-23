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

    if ("ontouchstart" in window) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const setCursorState = (target: HTMLElement | null) => {
      const cursorLabel = target?.dataset.cursorLabel;
      const isInteractive = Boolean(
        target?.closest("a, button, [data-cursor], video, .work-card-item, .services-row")
      );

      dot.classList.toggle("cursor--hover", isInteractive);
      ring.classList.toggle("cursor--hover", isInteractive);
      label.textContent = cursorLabel ?? "";
      label.style.opacity = cursorLabel && isInteractive ? "1" : "0";
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, overwrite: true });
      setCursorState(event.target instanceof HTMLElement ? event.target : null);
    };

    const onMouseLeave = () => {
      dot.classList.remove("cursor--hover");
      ring.classList.remove("cursor--hover");
      label.style.opacity = "0";
      label.textContent = "";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      raf = window.requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    raf = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.cancelAnimationFrame(raf);
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
          width: 0 !important;
          height: 0 !important;
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
