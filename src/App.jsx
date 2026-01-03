import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatsAppButton from "./components/WhatsAppButton";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="app-background">
      <Navbar />

      <Hero />

      {/* 👇 ABOUT MUST BE HERE */}
      <About />
      <WhatsAppButton />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
