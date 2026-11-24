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
        <p>Great places are not defined by a price tag. They are defined by <em>how they make you feel.</em></p>
      </section>

      <section className="about-section about-how">
        <div className="about-section-label">02 / HOW IT WORKS</div>
        <div className="about-section-body">
          <h2>Discover here.<br /><em>Connect directly.</em></h2>
          <p>Belle Voyage Estates is a property discovery and promotional platform. We showcase properties and accommodations, helping visitors explore options and connect with the relevant owner, host, or real estate professional.</p>
          <div className="about-steps">
            <div><span>01</span><h3>Explore</h3><p>Browse places and discover what suits your plans.</p></div>
            <div><span>02</span><h3>Find your fit</h3><p>Consider the location, details, and price that feel right for you.</p></div>
            <div><span>03</span><h3>Connect</h3><p>Follow the listing or enquiry route to the person responsible for the property.</p></div>
          </div>
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
