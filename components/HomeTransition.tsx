"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeTransition() {
  const bridge = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const hero = document.querySelector<HTMLElement>(".home-hero");
    const contact = document.querySelector<HTMLElement>(".ct");
    const section = bridge.current;
    if (!hero || !contact || !section) return;
    const ctx = gsap.context(() => {
      gsap.to(hero, {
        backgroundPosition: "center 62%",
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".home-hero-content", {
        y: -55, opacity: 0.45, ease: "none",
        scrollTrigger: { trigger: hero, start: "45% top", end: "bottom top", scrub: true },
      });
      gsap.fromTo(".home-transition-line", { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom 30%", scrub: true },
      });
      gsap.fromTo(".ct-inner", { y: 48, opacity: 0.65 }, {
        y: 0, opacity: 1, ease: "power2.out", duration: 1,
        scrollTrigger: { trigger: contact, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="home-transition" ref={bridge} aria-hidden="true">
      <div className="home-transition-glow" />
      <div className="home-transition-line" />

    </section>
  );
}
