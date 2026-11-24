import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories & reviews — Belle Voyage Estates",
  description: "A place for real experiences and testimonials from the Belle Voyage Estates community.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <main className="stories-page">
      <section className="stories-hero" aria-labelledby="stories-title">
        <div className="stories-hero-inner">
          <p className="stories-eyebrow"><span aria-hidden="true">✦</span> THE BELLE VOYAGE JOURNAL</p>
          <h1 id="stories-title">Every place<br />has a <em>story.</em></h1>
          <p className="stories-intro">The places we discover are only part of the journey. The people, moments, and memories are what make them special.</p>
          <a href="#voices" className="stories-down">THE STORIES <span aria-hidden="true">↓</span></a>
        </div>
        <div className="stories-hero-decoration" aria-hidden="true"><span>BV</span><span>EST. WITH PURPOSE</span></div>
      </section>

      <section className="stories-voices" id="voices" aria-labelledby="voices-title">
        <div className="stories-section-heading">
          <span className="stories-eyebrow">01 / WORDS THAT MATTER</span>
          <h2 id="voices-title">In their <em>own words.</em></h2>
        </div>
        <div className="stories-empty">
          <span className="stories-quote-mark" aria-hidden="true">“</span>
          <p>Good stories are worth waiting for.</p>
          <span>We're making room here for honest experiences from our guests, property owners, and partners. As their stories arrive, we'll share them with care.</span>
          <div className="stories-empty-rule" aria-hidden="true" />
          <span className="stories-empty-footnote">REAL PEOPLE. REAL PLACES. REAL EXPERIENCES.</span>
        </div>
      </section>

      <section className="stories-invite" aria-labelledby="stories-invite-title">
        <div className="stories-invite-content">
          <span className="stories-eyebrow">02 / YOUR CHAPTER</span>
          <h2 id="stories-invite-title">Have a story<br /><em>to share?</em></h2>
          <p>Whether you found a place you love or worked with us along the way, we'd love to hear about your experience.</p>
          <a className="stories-button" href="mailto:ciravogler@bellevoyageestates.com?subject=My%20Belle%20Voyage%20Experience">Share your experience <span aria-hidden="true">↗</span></a>
        </div>
        <div className="stories-invite-aside" aria-hidden="true"><span>B</span><span>V</span><span>E</span></div>
      </section>
      <footer className="stories-footer">
        <Link href="/">← Back to home</Link>
        <span>BELLE VOYAGE ESTATES</span>
        <Link href="/properties">Explore places ↗</Link>
      </footer>
    </main>
  );
}
