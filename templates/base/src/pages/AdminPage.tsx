function AdminPage() {
  return (
    <div className="page-grid">
      <section className="metric-grid">
        <div className="metric-card">
          <div className="metric-label">Revenue</div>
          <div className="metric-value">$12.4k</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Orders</div>
          <div className="metric-value">184</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Conversion</div>
          <div className="metric-value">4.8%</div>
        </div>
      </section>

      <section className="panel-card stack">
        <div className="section-title">
          <div>
            <h2>Admin</h2>
            <p>Manage products, toggles, assistant prompts, and payment mode.</p>
          </div>
        </div>

        <div className="list">
          <div className="list-item row-between">
            <div>
              <strong>Payment mode</strong>
              <div className="muted">Currently set to mock</div>
            </div>
            <button className="button-secondary">Switch mode</button>
          </div>

          <div className="list-item row-between">
            <div>
              <strong>Assistant prompt</strong>
              <div className="muted">AI shopping concierge tuned for product recommendation</div>
            </div>
            <button className="button-secondary">Edit prompt</button>
          </div>

          <div className="list-item row-between">
            <div>
              <strong>Catalog visibility</strong>
              <div className="muted">3 featured products live</div>
            </div>
            <button className="button-secondary">Manage catalog</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
