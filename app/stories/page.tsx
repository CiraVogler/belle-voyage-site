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
        <p className="stories-voices-intro">A growing collection of experiences, told by the people who lived them. Browse the chapters below as we gather real stories.</p>
        <div className="stories-gallery" aria-label="Upcoming testimonials and reviews">
          <article className="stories-story-card">
            <span className="stories-card-index">01 / GUEST EXPERIENCES</span>
            <span className="stories-card-quote" aria-hidden="true">“</span>
            <h3>Places worth remembering.</h3>
            <p>We're saving this space for genuine reflections from people who have found a place through Belle Voyage Estates.</p>
            <span className="stories-card-status">STORIES COMING SOON</span>
          </article>
          <article className="stories-story-card">
            <span className="stories-card-index">02 / PROPERTY OWNERS</span>
            <span className="stories-card-quote" aria-hidden="true">“</span>
            <h3>From the other side of the door.</h3>
            <p>Here, property owners will be able to share what working together has meant to them.</p>
            <span className="stories-card-status">STORIES COMING SOON</span>
          </article>
          <article className="stories-story-card">
            <span className="stories-card-index">03 / PARTNERS & CONNECTIONS</span>
            <span className="stories-card-quote" aria-hidden="true">“</span>
            <h3>Better, together.</h3>
            <p>A home for the perspectives of partners and collaborators across places and borders.</p>
            <span className="stories-card-status">STORIES COMING SOON</span>
          </article>
          <article className="stories-story-card">
            <span className="stories-card-index">04 / YOUR STORY</span>
            <span className="stories-card-quote" aria-hidden="true">✦</span>
            <h3>Maybe yours is next.</h3>
            <p>Have a real experience to share? We'd love to hear it, in your own words.</p>
            <a className="stories-card-link" href="mailto:ciravogler@bellevoyageestates.com?subject=My%20Belle%20Voyage%20Experience">Tell us your story ↗</a>
          </article>
        </div>
        <p className="stories-gallery-note">More stories will be added as verified experiences are shared. We never publish made-up testimonials.</p>
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
