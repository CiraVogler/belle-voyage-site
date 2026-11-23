import { Masthead } from "@/components/Masthead";

import { HomeJourney } from "@/components/HomeJourney";
import { HomeTransition } from "@/components/HomeTransition";
import { Contact } from "@/components/Contact";
import { Scroll } from "@/components/Scroll";
import { ContactModal } from "@/components/ContactModal";

export default function Page() {
  return (
    <Scroll>
      <Masthead />
      <main>
        <HomeJourney />
        <HomeTransition />
        <Contact />
      </main>
      <ContactModal />
    </Scroll>
  );
}
