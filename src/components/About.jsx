import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-safety glass-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left reveal-left">
          <img src="/images/about-main.jpg" alt="IndoChina Kitchen" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right reveal-right">
          <span className="about-topline">
            
          </span>

          <h2>About Us</h2>

          <div className="about-points">

            <div className="about-point">
              <img src="/images/about-icon-1.jpg" alt="" />
              <p>
                Authentic Indo-Chinese recipes crafted with premium ingredients
                and traditional techniques.
              </p>
            </div>

            <div className="about-point">
              <img src="/images/about-icon-2.jpg" alt="" />
              <p>
                Family-friendly ambience designed for comfort, warmth and
                memorable dining.
              </p>
            </div>

            <div className="about-point">
              <img src="/images/about-icon-3.jpg" alt="" />
              <p>
                Hygiene, cleanliness and quality are maintained at every stage
                of preparation and service.
              </p>
            </div>

            <div className="about-point">
              <img src="/images/about-icon-4.jpg" alt="" />
              <p>
                Inspired by the flavours of Asia, served with Indian hospitality.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
