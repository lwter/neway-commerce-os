function AccountPage() {
  return (
    <div className="page-grid">
      <section className="panel-card stack">
        <div className="section-title">
          <div>
            <h2>Account</h2>
            <p>Purchased products, billing state, and account-level actions.</p>
          </div>
        </div>

        <div className="list">
          <div className="list-item row-between">
            <div>
              <strong>UI Kit Pro</strong>
              <div className="muted">Purchased · Digital access enabled</div>
            </div>
            <button className="button-secondary">Download</button>
          </div>

          <div className="list-item row-between">
            <div>
              <strong>AI Workflow Pack</strong>
              <div className="muted">Purchased · Updates included</div>
            </div>
            <button className="button-secondary">Open library</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccountPage;
