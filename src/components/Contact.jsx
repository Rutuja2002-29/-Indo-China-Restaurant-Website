import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* Subscribe strip */}
      <div className="subscribe-strip">
        <div>
          <h2>Subscribe Us Now</h2>
          <p>Get more news and delicious dishes everyday from us</p>
        </div>

        <div className="subscribe-box">
          <input type="email" placeholder="Email" />
          <button>➤</button>
        </div>
      </div>

      {/* Main contact area */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Indo China Family Restaurant</h1>

          <p>
            Indo China Family Restaurant serves authentic Indo-Chinese cuisine
            with rich flavours, premium ingredients and a warm family-friendly
            ambience.
          </p>

          <div className="contact-info">
            <div>
              <span>📍</span>
              <p>
                Shop No 14, Panvelkar Plaza,<br />
                Near Station Road,<br />
                Ambernath, Thane-421501,<br />
                Maharashtra
              </p>
            </div>

            <div>
              <span>📞</span>
              <p>
                <a href="tel:7031992999">7031992999</a><br />
                <a href="tel:7031993999">7031993999</a>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-box">
            <iframe
              title="Indo China Family Restaurant Location"
              src="https://www.google.com/maps?q=Panvelkar+Plaza+Ambernath&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-card">
          <h2>Open All Days</h2>
          <h3>Ambernath</h3>
          <p>Monday – Sunday</p>
          <span>11:00 AM – 12:00 AM</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="contact-footer">
        © {new Date().getFullYear()} Indo China Family Restaurant, Ambernath
      </footer>

    </section>
  );
}
