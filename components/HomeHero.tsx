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
        <p className="home-hero-kicker">BELLE VOYAGE ESTATES</p>
        <h1 id="home-hero-title">A world of places.<br/><em>A place for you.</em></h1>
        <div className="home-hero-accent" aria-hidden="true" />
        <p className="home-hero-description">Discover exceptional properties across borders, lifestyles, and possibilities.</p>
        <Link className="home-hero-cta" href="/properties">Explore properties <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="home-hero-bottom">
        <div className="home-hero-rail" aria-label="Discover, explore, connect">
          <span className="home-hero-rail-stop"><i aria-hidden="true"/>Discover</span>
          <span className="home-hero-rail-stop"><i aria-hidden="true"/>Explore</span>
          <span className="home-hero-rail-stop"><i aria-hidden="true"/>Connect</span>
        </div>
        <div className="home-hero-cards">
          <Link href="/properties" className="home-hero-card">
            <span className="home-hero-card-icon" aria-hidden="true">⌕</span>
            <span><strong>Discover Properties</strong><small>Explore locations and property types.</small></span>
            <span className="home-hero-card-arrow" aria-hidden="true">↗</span>
          </Link>
          <Link href="/properties?market=us" className="home-hero-card">
            <span className="home-hero-card-icon" aria-hidden="true">◎</span>
            <span><strong>Explore Destinations</strong><small>Browse the United States, Canada, and Europe.</small></span>
            <span className="home-hero-card-arrow" aria-hidden="true">↗</span>
          </Link>
          <Link href="/owners" className="home-hero-card">
            <span className="home-hero-card-icon" aria-hidden="true">⌂</span>
            <span><strong>List With Us</strong><small>Introduce your property to a wider audience.</small></span>
            <span className="home-hero-card-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
