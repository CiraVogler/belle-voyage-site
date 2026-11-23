import { Masthead } from "@/components/Masthead";
import { HomeIntro } from "@/components/HomeIntro";
import { HomeHero } from "@/components/HomeHero";
import { Contact } from "@/components/Contact";
import { Scroll } from "@/components/Scroll";
import { ContactModal } from "@/components/ContactModal";

export default function Page() {
  return (
    <Scroll>
      <Masthead />
      <HomeIntro />
      <main>
        <HomeHero />
        <Contact />
      </main>
      <ContactModal />
    </Scroll>
  );
}
