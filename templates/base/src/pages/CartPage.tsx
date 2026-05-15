import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page-grid">
      <section className="panel-card stack">
        <div className="section-title">
          <div>
            <h2>Cart</h2>
            <p>Review selected products before checkout.</p>
          </div>
        </div>

        <div className="list">
          {items.length === 0 ? (
            <div className="list-item">
              <strong>Your cart is empty.</strong>
              <div className="muted">Add products from the home page to continue.</div>
            </div>
          ) : (
            items.map((item) => (
              <div className="list-item row-between" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <div className="muted">Qty {item.quantity}</div>
                </div>
                <div className="row">
                  <span>${item.price}</span>
                  <button className="button-secondary" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="row-between">
          <div>
            <div className="muted">Subtotal</div>
            <div className="metric-value">${subtotal}</div>
          </div>
          <Link className="button" to="/checkout">
            Continue to checkout
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
