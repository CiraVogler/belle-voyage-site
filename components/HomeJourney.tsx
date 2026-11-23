"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getLenis } from "@/lib/lenis";
import { HomeIntro } from "@/components/HomeIntro";
import { HomeHero } from "@/components/HomeHero";

/* The gold stroke belongs to the combined opening and hero, not either screen.
   Its SVG coordinates are measured from the actual rail on every resize. */
export function HomeJourney() {
  const root = useRef<HTMLDivElement>(null);
  const stroke = useRef<SVGPathElement>(null);
  const [geometry, setGeometry] = useState({ width: 1, height: 1, d: "M 0 0" });
  useEffect(() => {
    const node = root.current;
    const path = stroke.current;
    if (!node || !path) return;
    const intro = node.querySelector<HTMLElement>(".home-intro");
    const hero = node.querySelector<HTMLElement>(".home-hero");
    const rail = node.querySelector<HTMLElement>(".home-hero-rail");
    if (!intro || !hero || !rail) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = (() => { try { return sessionStorage.getItem("bv-arrived") === "1"; } catch { return true; } })();
    let timeline: gsap.core.Timeline | undefined;
    const measure = () => {
      const box = node.getBoundingClientRect();
      const railBox = rail.getBoundingClientRect();
      const x = window.innerWidth <= 600 ? window.innerWidth * .08 : window.innerWidth * .18;
      const y = railBox.top - box.top + 8;
      const d = `M ${x} 0 L ${x} ${y} L ${x + 32} ${y}`;
      path.setAttribute("d", d);
      setGeometry({ width: box.width, height: box.height, d });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    observer.observe(rail);
    measure();
    if (reduced || alreadySeen || window.scrollY > 20) {
      getLenis()?.start();
      return () => observer.disconnect();
    }
    /* Allow layout to settle before calculating the complete stroke length. */
    const frame = requestAnimationFrame(() => {
      measure();
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      const position = { y: 0 };
      const destination = intro.offsetHeight;
      window.scrollTo(0, 0);
      timeline = gsap.timeline({
        onComplete: () => {
          gsap.set(path, { clearProps: "strokeDasharray,strokeDashoffset" });
          try { sessionStorage.setItem("bv-arrived", "1"); } catch {}
          getLenis()?.start();
        }
      });
      timeline.to(path, { strokeDashoffset: 0, duration: 4.9, ease: "power1.inOut" }, 0);
      timeline.to(position, {
        y: destination, duration: 3.5, ease: "power2.inOut",
        onUpdate: () => window.scrollTo(0, position.y)
      }, 1.15);
    });
    return () => {
      cancelAnimationFrame(frame);
      timeline?.kill();
      observer.disconnect();
      getLenis()?.start();
    };
  }, []);
  return (
    <div className="home-journey" ref={root}>
      <HomeIntro />
      <HomeHero />
      <svg className="home-journey-thread" aria-hidden="true"
        width={geometry.width} height={geometry.height}
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        preserveAspectRatio="none">
        <path ref={stroke} d={geometry.d} fill="none" stroke="#d9b985"
          strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}
