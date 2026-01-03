import { useCart } from "../context/CartContext";
import { WHATSAPP_NUMBER } from "../config/whatsapp";

function CartButton() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart.length) return null;

  const message = encodeURIComponent(
    `Hello Indo China Family Restaurant 👋\n\nI want to order:\n` +
      cart.map((c, i) => `${i + 1}. ${c.name} - ₹${c.price}`).join("\n") +
      `\n\nPlease confirm availability.`
  );

  return (
    <div className="cart-box">
      <h4>🛒 Your Order</h4>

      {cart.map((item, i) => (
        <div className="cart-item" key={i}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(i)}>❌</button>
        </div>
      ))}

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-order"
        onClick={clearCart}
      >
        Order on WhatsApp
      </a>
    </div>
  );
}

export default CartButton;
