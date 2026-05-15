import { FormEvent, useState } from "react";
import { useCartStore } from "../store/cartStore";
import { createCheckout } from "../lib/api";

function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const [status, setStatus] = useState("Ready to create checkout session.");

  async function handleCheckout(event: FormEvent) {
    event.preventDefault();
    setStatus("Creating checkout session...");

    try {
      const data = await createCheckout({
        items: items.map((item) => ({
          id: item.id,
          quantity: item.quantity
        })),
        paymentMode: "mock"
      });

      if (data?.ok) {
        setStatus(`Checkout created: ${data.checkoutId || "mock-checkout"}`);
      } else {
        setStatus("Checkout request completed without success flag.");
      }
    } catch {
      setStatus("Checkout request failed. This scaffold uses placeholder logic by default.");
    }
  }

  return (
    <div className="page-grid">
      <section className="panel-card stack">
        <div className="section-title">
          <div>
            <h2>Checkout</h2>
            <p>Use mock mode for demo flow, then switch to Stripe for production.</p>
          </div>
        </div>

        <form className="stack" onSubmit={handleCheckout}>
          <input className="input" placeholder="Email address" defaultValue="hello@example.com" />
          <input className="input" placeholder="Country" defaultValue="Singapore" />
          <input className="input" placeholder="Coupon code" />

          <div className="list">
            {items.map((item) => (
              <div className="list-item row-between" key={item.id}>
                <span>{item.name}</span>
                <span>
                  ${item.price} × {item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="row-between">
            <span className="muted">{status}</span>
            <button className="button" type="submit">
              Create checkout
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CheckoutPage;
