import "./Safety.css";

export default function Safety() {
  return (
    <section className="safety-section" id="safety">
      <div className="safety-overlay">

        <h5 className="safety-tag">OUR SAFETY</h5>
        <h2>Your Safety Is Our Priority</h2>

        <p className="safety-desc">
          We follow strict hygiene and safety standards to make sure your
          dining experience is safe, comfortable, and enjoyable.
        </p>

        <div className="safety-cards">
          <div className="safety-card">
            <img src="/safety/mask.png" alt="Mask Safety" />
            <h4>Staff With Masks</h4>
            <p>Our staff follows proper hygiene & safety protocols.</p>
          </div>

          <div className="safety-card">
            <img src="/safety/sanitize.png" alt="Sanitized" />
            <h4>Sanitized Kitchen</h4>
            <p>Kitchen & dining area cleaned regularly.</p>
          </div>

          <div className="safety-card">
            <img src="/safety/temperature.png" alt="Temperature Check" />
            <h4>Temperature Check</h4>
            <p>Daily temperature checks for staff.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
