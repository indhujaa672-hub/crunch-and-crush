const cartItems = document.querySelectorAll(".cart-item");

function updateTotal() {

let total = 0;

document.querySelectorAll(".cart-item").forEach(item => {

const price =
parseInt(
item.querySelector(".price")
.textContent.replace("₹","")
);

const quantity =
parseInt(
item.querySelector(".quantity")
.textContent
);

total += price * quantity;

});

document.getElementById("total").textContent = total;
}

cartItems.forEach(item => {

const plus =
item.querySelector(".plus");

const minus =
item.querySelector(".minus");

const quantity =
item.querySelector(".quantity");

plus.addEventListener("click", () => {

quantity.textContent =
parseInt(quantity.textContent)+1;

updateTotal();
saveCartToLocalStorage();

});

minus.addEventListener("click", () => {

if(parseInt(quantity.textContent)>1){

quantity.textContent =
parseInt(quantity.textContent)-1;

updateTotal();
saveCartToLocalStorage();

}

});

const removeBtn =
item.querySelector(".remove-btn");

removeBtn.addEventListener("click", () => {

item.remove();
updateTotal();
saveCartToLocalStorage();

});

});

updateTotal();
function saveCartToLocalStorage() {
  const items = [];
  document.querySelectorAll(".cart-item").forEach(item => {
    items.push({
      name: item.querySelector("h3").textContent,
      price: parseInt(item.querySelector(".price").textContent.replace("₹", "")),
      quantity: parseInt(item.querySelector(".quantity").textContent)
    });
  });
  const total = document.getElementById("total").textContent;
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("cartTotal", total);
}

saveCartToLocalStorage();