import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import HorizontalScroll from "@/components/sections/HorizontalScroll";
import Clients from "@/components/sections/Clients";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="top" data-scroll-container>
      <Hero />
      <Showreel />
      <Work />
      <About />
      <Services />
      <HorizontalScroll />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
