"use client";
import { useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

/* A brief branded entrance; the railway landing itself is no longer rendered. */
export function HomeIntro() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("bv-arrived") === "1"; } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try { sessionStorage.setItem("bv-arrived", "1"); } catch {}
      getLenis()?.start();
      return;
    }
    setVisible(true);
    const finish = () => {
      setVisible(false);
      try { sessionStorage.setItem("bv-arrived", "1"); } catch {}
      getLenis()?.start();
    };
    const timer = window.setTimeout(finish, 2700);
    const skip = () => { window.clearTimeout(timer); finish(); };
    window.addEventListener("wheel", skip, { once: true, passive: true });
    window.addEventListener("touchstart", skip, { once: true, passive: true });
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchstart", skip);
      window.removeEventListener("keydown", skip);
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="home-intro" aria-label="Welcome to Belle Voyage Estates">
      <div className="home-intro-line" aria-hidden="true"><span /></div>
      <div className="home-intro-wordmark">
        <span>Belle Voyage</span>
        <span>Estates</span>
      </div>
    </div>
  );
}
