import { useState } from "react";
import "./Testimonials.css";

import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import user3 from "../assets/testimonials/user3.png";

const data = [
  {
    name: "Dylan",
    text:
      "My first visit to IndoChina Family Restaurant was amazing. The ambience is calm, food quality is excellent and service is fast. Totally loved the vibe!",
    img: user1,
  },
  {
    name: "Ananya",
    text:
      "Authentic Indo-Chinese flavours with a warm family-friendly environment. One of the best dining experiences in the city.",
    img: user2,
  },
  {
    name: "Rahul",
    text:
      "Clean, hygienic and delicious food. Staff is polite and ambience is premium. Highly recommended!",
    img: user3,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? data.length - 1 : index - 1);
  const next = () =>
    setIndex(index === data.length - 1 ? 0 : index + 1);

  return (
    <section className="testimonial-section" id="testimonials">
      <span className="testimonial-tag">TESTIMONIAL</span>
      <h2 className="testimonial-title">Our Customer Says</h2>

      <div className="testimonial-box fade">
        <p className="quote">“</p>
        <p className="testimonial-text">{data[index].text}</p>
        <h4 className="testimonial-name">{data[index].name}</h4>
      </div>

      <div className="testimonial-nav">
        <button onClick={prev}>‹</button>

        <div className="avatars">
          {data.map((item, i) => (
            <img
              key={i}
              src={item.img}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button onClick={next}>›</button>
      </div>
    </section>
  );
}
