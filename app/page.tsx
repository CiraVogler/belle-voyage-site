import { Masthead } from "@/components/Masthead";
import { Line } from "@/components/Line";
import { HomeHero } from "@/components/HomeHero";
import { Contact } from "@/components/Contact";
import { Scroll } from "@/components/Scroll";
import { ContactModal } from "@/components/ContactModal";

export default function Page() {
  return (
    <Scroll>
      <Masthead />
      <main>
        <HomeHero />
        <Line />
        <Contact />
      </main>
      <ContactModal />
    </Scroll>
  );
}
