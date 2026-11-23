"use client";
import { useEffect } from "react";
import Link from "next/link";

export function HomeHero() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".home-hero");
    const rail = hero?.querySelector<HTMLElement>(".home-hero-rail");
    if (!hero || !rail) return;
    const sync = () => {
      const h = hero.getBoundingClientRect();
      const r = rail.getBoundingClientRect();
      hero.style.setProperty("--thread-length", `${Math.max(0, r.top - h.top + 8)}px`);
    };
    const observer = new ResizeObserver(sync);
    observer.observe(hero);
    observer.observe(rail);
    sync();
    return () => observer.disconnect();
  }, []);
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-hero-connecting-line" aria-hidden="true" />
      <div className="home-hero-content">
        <h1 id="home-hero-title">Homes without borders.<br/><em>All in one place.</em></h1>
        <p className="home-hero-description">Discover exceptional properties across borders.</p>
        <Link className="home-hero-cta" href="/properties">Explore properties <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="home-hero-bottom">
        <nav className="home-hero-rail" aria-label="Discover, explore, connect">
          <Link href="/properties" className="home-hero-rail-stop"><i aria-hidden="true"/>Discover</Link>
          <Link href="/properties?market=us" className="home-hero-rail-stop"><i aria-hidden="true"/>Explore</Link>
          <Link href="/owners" className="home-hero-rail-stop"><i aria-hidden="true"/>Connect</Link>
        </nav>
      </div>
    </section>
  );
}
