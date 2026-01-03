import "./Navbar.css";
import logo from "../assets/logo/dragon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT : LOGO */}
      <div className="nav-left">
        <img src={logo} alt="IndoChina Logo" className="nav-logo" />
        <span className="nav-brand">
          indo<span>CHINA</span>
        </span>
      </div>

      {/* RIGHT : MENU */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
