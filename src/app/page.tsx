import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Work from "@/components/sections/Work";
import Manifesto from "@/components/sections/Manifesto";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import HorizontalScroll from "@/components/sections/HorizontalScroll";
import Extras from "@/components/sections/Extras";
import Articles from "@/components/sections/Articles";
import Culture from "@/components/sections/Culture";
import Store from "@/components/sections/Store";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="top" data-scroll-container>
      <Hero />
      <Partners />
      <Work />
      <Manifesto />
      <About />
      <Services />
      <HorizontalScroll />
      <Extras />
      <Articles />
      <Culture />
      <Store />
      <Contact />
      <Footer />
    </main>
  );
}
