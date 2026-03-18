import Home from "@/components/Home";
import About from "../components/pages/about";
import Services from "../components/pages/services";
import Work from "../components/pages/work";
import Contact from "../components/pages/contact";

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <Home />
      </section>
      <section id="about" className="py-24 lg:py-32">
        <About />
      </section>
      <section id="services" className="py-24 lg:py-32">
        <Services />
      </section>
      <section id="work" className="py-24 lg:py-32">
        <Work />
      </section>
      <section id="contact" className="py-24 lg:py-32 pb-40">
        <Contact />
      </section>
    </div>
  );
}
