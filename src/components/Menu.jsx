import { useState } from "react";
import "./Menu.css";

const categories = [
  "Starters",
  "Soup",
  "Veg Main Course",
  "Non Veg Main Course",
  "Rice & Noodles",
  "Biryani",
];

const menuData = {
  Starters: [
    { name: "Chilly Dry", price: "205 / 265 / 255 / 315" },
    { name: "65 Dry", price: "205 / 265 / 255 / 315" },
    { name: "Manchurian Dry", price: "205 / 265 / 255 / 315" },
    { name: "Lolly Pop (6 pcs)", price: "215" },
    { name: "Green Schezwan Dry", price: "220 / 280 / 265 / 325" },
  ],

  Soup: [
    { name: "Manchow Soup", price: "120 / 145 / 160" },
    { name: "Hot & Sour Soup", price: "135 / 160 / 170" },
    { name: "Sweet Corn Soup", price: "135 / 160 / 170" },
    { name: "Tom Yum Soup", price: "135 / 160 / 170" },
  ],

  "Veg Main Course": [
    { name: "Paneer Butter Masala", price: "280" },
    { name: "Veg Kolhapuri", price: "200" },
    { name: "Veg Handi", price: "225" },
    { name: "Veg Kadai", price: "225" },
    { name: "Paneer Korma", price: "275" },
  ],

  "Non Veg Main Course": [
    { name: "Chicken Masala", price: "240" },
    { name: "Chicken Kadhai", price: "270" },
    { name: "Butter Chicken", price: "300" },
    { name: "Mutton Rogan Josh", price: "370" },
    { name: "Prawn Masala", price: "370" },
  ],

  "Rice & Noodles": [
    { name: "Veg Fried Rice", price: "205" },
    { name: "Chicken Fried Rice", price: "220" },
    { name: "Veg Hakka Noodles", price: "205" },
    { name: "Chicken Hakka Noodles", price: "220" },
  ],

  Biryani: [
    { name: "Veg Biryani", price: "190" },
    { name: "Chicken Biryani", price: "240" },
    { name: "Chicken Dum Biryani", price: "260" },
    { name: "Mutton Biryani", price: "280" },
    { name: "Egg Biryani", price: "280" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("Starters");

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <span>OUR MENU</span>
        <h2>Tasty And Good Price</h2>
      </div>

      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-content fade-in">

        {/* ✅ PRICE HEADING */}
        {(active === "Starters" || active === "Soup") && (
          <div className="menu-price-heading">
            <span></span>

            {active === "Starters" && (
              <div className="price-types">
                <small>Veg</small>
                <small>Paneer</small>
                <small>Chicken</small>
                <small>Prawns</small>
              </div>
            )}

            {active === "Soup" && (
              <div className="price-types">
                <small>Veg</small>
                <small>Chicken</small>
                <small>Prawns</small>
              </div>
            )}
          </div>
        )}

        {menuData[active].map((item, index) => (
          <div className="menu-item" key={index}>
            <span>{item.name}</span>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
