import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phone = "7031992999"; // later change kar sakti ho
  const message = encodeURIComponent(
    "Hello Indo China Family Restaurant, I want to place an order 🍜"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}
