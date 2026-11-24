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
          <h1 id="about-title">A world of places.<br /><em>A more personal way to explore.</em></h1>
          <p>We believe finding a place should feel like the beginning of something, not just another search.</p>
          <a href="#our-story" className="about-scroll">GET TO KNOW US <span aria-hidden="true">↓</span></a>
        </div>
        <span className="about-hero-mark" aria-hidden="true">BVE</span>
      </section>

      <section className="about-section about-story" id="our-story">
        <div className="about-section-label">01 / THE BEGINNING</div>
        <div className="about-section-body">
          <h2>Built on curiosity.<br /><em>Made for connection.</em></h2>
          <p>Belle Voyage Estates began with a simple idea: beautiful places deserve to be discovered, wherever they happen to be. Founded in Ontario, Canada, the business was created to make exploring property and accommodation across borders feel more approachable.</p>
          <p>From city apartments to distinctive stays, our ambition is to bring together opportunities worth exploring and make it easier to connect with the people behind them.</p>
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
