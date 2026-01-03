import "./Gallery.css";

import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-card" key={i}>
            <img src={img} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
