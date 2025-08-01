const backendURL = "http://localhost:3000/api";

async function addProduct() {
  const name = document.getElementById('productName').value;
  const price = Number(document.getElementById('productPrice').value);
  const qty = Number(document.getElementById('productQty').value);

  await fetch(`${backendURL}/products`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, price, qty })
  });

  alert("Producto agregado");
}

async function addSale() {
  const product = document.getElementById('saleProduct').value;
  const qty = Number(document.getElementById('saleQty').value);

  await fetch(`${backendURL}/sales`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ product, qty })
  });

  alert("Venta registrada");
}

async function addExpense() {
  const desc = document.getElementById('expenseDesc').value;
  const amt = Number(document.getElementById('expenseAmt').value);

  await fetch(`${backendURL}/expenses`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ desc, amt })
  });

  alert("Gasto registrado");
}
