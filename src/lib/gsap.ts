"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.defaults({
    ease: "power4.out",
    duration: 1,
  });

  ScrollTrigger.defaults({
    toggleActions: "play none none none",
  });
}

export { gsap, ScrollTrigger };
export default gsap;
