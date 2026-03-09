"use client";
import { useEffect, useRef, useCallback } from "react";

export function useLocomotiveScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<unknown>(null);

  const update = useCallback(() => {
    if (locomotiveRef.current && typeof (locomotiveRef.current as { update?: () => void }).update === "function") {
      (locomotiveRef.current as { update: () => void }).update();
    }
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    let instance: unknown = null;

    const initScroll = async () => {
      try {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        const LS = LocomotiveScrollModule.default;

        instance = new LS({
          el: scrollRef.current as HTMLElement,
          smooth: true,
          multiplier: 0.85,
          lerp: 0.07,
          getDirection: true,
          getSpeed: true,
          class: "is-inview",
          smartphone: { smooth: false },
          tablet: { smooth: false, breakpoint: 1024 },
        } as ConstructorParameters<typeof LS>[0]);

        locomotiveRef.current = instance;
      } catch {
        // Locomotive Scroll failed to init — fall back to native scroll
      }
    };

    initScroll();

    return () => {
      if (instance && typeof (instance as { destroy?: () => void }).destroy === "function") {
        (instance as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return { scrollRef, locomotiveRef, update };
}
