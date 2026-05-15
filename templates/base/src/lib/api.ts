export async function getProducts() {
  const response = await fetch("/functions/api/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function createCheckout(payload: unknown) {
  const response = await fetch("/functions/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create checkout");
  }

  return response.json();
}

export async function askConcierge(payload: unknown) {
  const response = await fetch("/functions/api/assistant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to reach assistant");
  }

  return response.json();
}
