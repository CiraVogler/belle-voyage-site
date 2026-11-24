"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ContactModal } from "./ContactModal";

import { getView, onView, openContact, setView, type View } from "@/lib/overlay";
import { getLenis } from "@/lib/lenis";

const LEGAL = [
  { label: "Privacy policy",   href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "AI usage policy",  href: "/ai-usage" },
  { label: "Site map",         href: "/sitemap" },
];

/* Reading sessionStorage THROWS, not returns null, when the browser is set to
   block storage — and this runs in an effect, so the throw takes the app down. */
const arrived = () => {
  try { return !!sessionStorage.getItem("bv-arrived"); } catch { return false; }
};

export function Masthead({ secondary = false }: { secondary?: boolean }) {
  const [view, setLocal] = useState<View>(getView());
  const open = view === "menu";

  useEffect(() => onView(setLocal), []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setView(null);
    addEventListener("keydown", esc);
    document.documentElement.classList.toggle("menu-open", view !== null);
    /* Focus escaped the open menu into the page behind it, and the keyboard
       fallback bar then slid up OVER the menu it had escaped from. */
    const main = document.querySelector<HTMLElement>("main");
    if (main) main.inert = view !== null;
    /* overflow:hidden does not hold Lenis — it keeps scrolling the page behind
       the overlay. Only stopping it does. Restart is gated on the intro having
       landed, or an overlay opened mid-intro would hand scrolling back early. */
    if (view) getLenis()?.stop();
    /* Not while the camera is away on the About branch — it holds the scroll
       itself, and starting Lenis under it left the page scrolled a frame and a
       half off the drawing, which is a blank screen. Line.tsx applies the
       mirror of this guard when it hands the scroll back. */
    else if (arrived() && !document.documentElement.classList.contains("at-about"))
      getLenis()?.start();
    return () => { removeEventListener("keydown", esc);
      document.documentElement.classList.remove("menu-open");
      const el = document.querySelector<HTMLElement>("main");
      if (el) el.inert = false; };
  }, [view]);

  return (
    <>
    <div className="mh">
      {!secondary && <a className="mh-wm" href="/">
        Belle&nbsp;V<i className="ring" aria-hidden="true">
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38.3" fill="none"
            stroke="currentColor" strokeWidth="23.4" /></svg></i>yage&nbsp;Estates
      </a>}

      <button className="mh-burger" type="button" aria-expanded={view !== null}
        aria-controls="mh-menu" onClick={() => setView(view ? null : "menu")}>
        <span className="sr">{view ? "Close" : "Open menu"}</span>
        <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
      </button>

    </div>

      {open && <button type="button" className="mh-backdrop" aria-label="Close menu" onClick={() => setView(null)} />}
      <div id="mh-menu" className="mh-menu" data-open={open} hidden={!open}>
        <div className="mh-menu-content">
          <div className="mh-menu-heading">
            <span>BELLE VOYAGE ESTATES</span>
            <span className="mh-menu-rule" aria-hidden="true" />
          </div>
          <nav aria-label="Primary" className="mh-menu-nav">
            <span className="mh-menu-label">EXPLORE</span>
            <a href="/properties" onClick={() => setView(null)}>Properties</a>
            <a href="/stories" onClick={() => setView(null)}>Testimonials</a>
            <a href="/about" onClick={() => setView(null)}>About Us</a>
            <a href="#contact" onClick={openContact}>Contact</a>
          </nav>
          <div className="mh-menu-partners">
            <span className="mh-menu-label">WORK WITH US</span>
            <a href="/owners" onClick={() => setView(null)}>List Your Property <span aria-hidden="true">↗</span></a>
            <a href="mailto:ciravogler@bellevoyageestates.com?subject=Partnership%20Inquiry" onClick={() => setView(null)}>Partnership Inquiries <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="mh-menu-footer">
          <a className="mh-instagram" href="https://www.instagram.com/bellevoyageestates/" target="_blank" rel="noopener noreferrer">
            <span>INSTAGRAM · @BELLEVOYAGEESTATES</span>
            <span aria-hidden="true">↗</span>
          </a>
          <p>Discover properties beyond borders.</p>
          <span className="mh-menu-copyright">© 2026 Belle Voyage Estates</span>
          <div className="mh-legal">
            {LEGAL.map((l) => <a key={l.label} href={l.href} onClick={() => setView(null)}>{l.label}</a>)}
          </div>
        </div>
      </div>
    </>
  );
}

/* Keep the landing masthead inside its animation; other routes share this one. */
export function SecondaryNavigation() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  return <><Masthead key={pathname} secondary />{pathname !== "/properties" && <ContactModal />}</>;
}
