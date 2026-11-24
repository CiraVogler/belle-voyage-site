import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Belle Voyage Estates",
  description: "Discover the story and purpose behind Belle Voyage Estates, an Ontario-based platform connecting people with places across borders.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-inner">
          <p className="about-kicker">BELLE VOYAGE ESTATES / OUR STORY</p>
          <h1 id="about-title">Home isn&apos;t always<br /><em>where you started.</em></h1>
          <p>Sometimes it&apos;s somewhere you&apos;ve been dreaming about for years. Sometimes it&apos;s somewhere you haven&apos;t even discovered yet.</p>
          <a href="#our-story" className="about-scroll">GET TO KNOW US <span aria-hidden="true">↓</span></a>
        </div>
        <span className="about-hero-mark" aria-hidden="true">BVE</span>
      </section>

      <section className="about-section about-story" id="our-story">
        <div className="about-story-aside">
          <div className="about-section-label">01 / THE BEGINNING</div>
          <div className="about-founder-placeholder" role="img" aria-label="Reserved space for a future founder portrait">
            <span>FOUNDER PORTRAIT</span>
            <small>Photograph coming soon</small>
          </div>
        </div>
        <div className="about-section-body">
          <h2>The Beginning of<br /><em>Belle Voyage Estates.</em></h2>
          <p>The foundations of Belle Voyage Estates date back to 2024, when founder Cira Vogler began exploring international real estate investment opportunities across Europe.</p>
          <p>Through researching foreign property markets, evaluating potential investments, and navigating international real estate processes, she encountered several challenges. Finding reliable property information, understanding local regulations, and establishing connections with knowledgeable industry professionals often proved unnecessarily complicated.</p>
          <p>Further conversations with fellow investors and international travelers revealed that these challenges were not isolated experiences. Many faced similar difficulties when researching overseas investments, securing accommodations, or navigating unfamiliar property markets.</p>
          <p>Recognizing this gap in the industry, the concept behind Belle Voyage Estates began to evolve from international property investment into a broader property discovery and promotional platform.</p>
          <p><strong>Belle Voyage Estates was developed with a clear purpose: to simplify international property discovery by connecting individuals with properties, relevant information, and trusted industry professionals across borders.</strong></p>
          <p>Today, that vision continues to guide the company&apos;s development, with an emphasis on accessibility, international connections, and making the process of discovering properties abroad more straightforward.</p>
        </div>
      </section>

      <section className="about-statement" aria-label="Our philosophy">
        <span className="about-kicker">WHAT WE BELIEVE</span>
        <p>The world is complicated enough. We believe crossing borders should <em>open possibilities, not create more obstacles.</em></p>
      </section>

      <section className="about-section about-how">
        <div className="about-section-label">02 / YOUR JOURNEY</div>
        <div className="about-section-body">
          <h2>Different journeys.<br /><em>One place to begin.</em></h2>
          <p>Not everyone is looking for the same thing. Some are looking for an escape, others for a fresh start, a place to call home, or an opportunity beyond their own borders. Whatever brings you here, there is a place for you at Belle Voyage Estates.</p>
          <ol className="about-journey-list">
            <li><h3>For the explorers.</h3><p>A weekend away. A summer abroad. Somewhere you&apos;ve always wanted to experience.</p></li>
            <li><h3>For the new beginnings.</h3><p>A new city. A new chapter. A place to build the life you&apos;ve imagined.</p></li>
            <li><h3>For those seeking home.</h3><p>Somewhere to settle, whether for a few months or a lifetime.</p></li>
            <li><h3>For the visionaries.</h3><p>A property to call your own. An investment in your future.</p></li>
            <li><h3>For those reaching further.</h3><p>New markets, new connections, and opportunities to introduce your property to the world.</p></li>
          </ol>
          <p className="about-journey-signature">Different reasons. Endless possibilities. One Belle Voyage.</p>
          <p className="about-clarity">We are a promotional and discovery platform, not the seller, landlord, or booking provider for third-party listings. Availability and transaction terms are confirmed directly with the relevant provider.</p>
        </div>
      </section>

      <section className="about-section about-vision">
        <div className="about-section-label">03 / LOOKING AHEAD</div>
        <div className="about-section-body">
          <h2>Rooted in Canada.<br /><em>Open to the world.</em></h2>
          <p>Our vision is international, with an interest in places across North America and Europe. As Belle Voyage Estates grows, we want to build thoughtful relationships with property owners and real estate professionals, while keeping discovery simple and welcoming for visitors.</p>
          <p>Whether you're searching for a new chapter or hoping to introduce your property to a wider audience, we'd love to connect.</p>
          <div className="about-actions">
            <Link href="/properties">Explore properties <span aria-hidden="true">↗</span></Link>
            <Link href="/owners">Work with us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <Link href="/">← Back to home</Link>
        <span>BELLE VOYAGE ESTATES</span>
        <Link href="/stories">Our stories ↗</Link>
      </footer>
    </main>
  );
}
