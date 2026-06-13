const randomOrderId =
"CC" + Math.floor(Math.random()*100000);

document.getElementById("orderId")
.textContent = "#" + randomOrderId;