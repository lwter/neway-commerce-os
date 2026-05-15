import { Link, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import AdminPage from "./pages/AdminPage";
import { useCartStore } from "./store/cartStore";

function App() {
  const count = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">N</div>
          <div>
            <div className="brand-name">__SITE_NAME__</div>
            <div className="brand-subtitle">by __BRAND_NAME__</div>
          </div>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({count})</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/account">Account</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main className="page-shell">
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
