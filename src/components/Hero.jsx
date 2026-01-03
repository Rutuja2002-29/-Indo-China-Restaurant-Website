import "./Hero.css";
import heroBg from "../assets/hero/restaurant.jpg";
import logo from "../assets/logo/dragon.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="home"
    >
      <div className="hero-overlay">
        <img src={logo} alt="logo" className="hero-logo" />

        <h1 className="hero-title">
          indo<span>CHINA</span>
        </h1>

        <h3 className="hero-subtitle">FAMILY RESTAURANT</h3>
        <p className="hero-tagline">The Oriental Aroma</p>
      </div>
    </section>
  );
}
