import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AiConcierge from "../components/AiConcierge";
import { useCartStore } from "../store/cartStore";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
};

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetch("/functions/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.products)) {
          setProducts(data.products);
        }
      })
      .catch(() => {
        setProducts([
          {
            id: "ui-kit-pro",
            name: "UI Kit Pro",
            price: 79,
            category: "design",
            tagline: "Premium components and sections for fast launches."
          },
          {
            id: "ai-workflow-pack",
            name: "AI Workflow Pack",
            price: 129,
            category: "ai",
            tagline: "Reusable prompts, automations, and workflow recipes."
          },
          {
            id: "creator-launch-box",
            name: "Creator Launch Box",
            price: 149,
            category: "growth",
            tagline: "Landing pages, funnel copy, and launch assets."
          }
        ]);
      });
  }, []);

  return (
    <div className="page-grid">
      <section className="hero-card">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="badge">Neway Commerce OS</div>
            <h1>Launch a premium multi-product storefront with AI-guided conversion.</h1>
            <p>
              __SITE_NAME__ by __BRAND_NAME__ is built for modern digital commerce:
              product matrix, premium merchandising, AI shopping guidance, checkout,
              account area, and deployment-ready structure.
            </p>

            <div className="hero-actions">
              <button className="button">Explore products</button>
              <button className="button-secondary">See product matrix</button>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual" />
      </section>

      <section className="stack">
        <div className="section-title">
          <div>
            <h2>Product matrix</h2>
            <p>Multi-product commerce layout for studios, creators, and digital operators.</p>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card stack" key={product.id}>
              <div className="product-topline">
                <span className="badge">{product.category}</span>
                <span className="price">${product.price}</span>
              </div>
              <div className="stack">
                <h3>{product.name}</h3>
                <p className="muted">{product.tagline}</p>
              </div>
              <div className="row-between">
                <span className="muted">Digital delivery</span>
                <button
                  className="button-secondary"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AiConcierge />
    </div>
  );
}

export default HomePage;
