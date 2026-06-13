const form = document.getElementById("checkoutForm");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  // Get cart items from localStorage
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  const total = parseInt(localStorage.getItem("cartTotal")) || 0;

  const orderData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    payment: document.getElementById("payment").value,
    items: items,
    total: total
  };

  try {
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    });

    const data = await res.json();

    if (data.success) {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartTotal");
      window.location.href = "success.html";
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Could not connect to server.");
  }
});