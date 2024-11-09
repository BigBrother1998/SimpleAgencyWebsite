import { useRef } from "react";

import Main from "./components/Main.jsx";
import Ensure from "./components/Ensure.jsx";
import WebsiteCard from "./components/WebsiteCard.jsx";
import ProgramCard from "./components/ProgramCard.jsx";
import Action from "./components/Action.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function Portfolio() {
  const mainRef = useRef(null);
  const offerRef = useRef(null);
  const ensureRef = useRef(null);
  const actionRef = useRef(null);
  const contactRef = useRef(null);

  const navigation = [
    { name: "Oferta", href: offerRef },
    { name: "Korzyści", href: ensureRef },
    { name: "Realizacja", href: actionRef },
    { name: "Kontakt", href: contactRef },
  ];

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Main Secion */}
      <Main
        scrollToSection={scrollToSection}
        navigation={navigation}
        offerRef={offerRef}
        mainRef={mainRef}
      />
      {/* WebsiteCard section */}
      <WebsiteCard offerRef={offerRef} />
      {/* ProgramCard section */}
      <ProgramCard />
      {/* Ensure Section */}
      <Ensure ensureRef={ensureRef} />
      {/* Action Section */}
      <Action actionRef={actionRef} />
      {/* Contact Section */}
      <Contact contactRef={contactRef} />
      {/* Footer Section*/}
      <Footer scrollToSection={scrollToSection} mainRef={mainRef} />
    </>
  );
}
