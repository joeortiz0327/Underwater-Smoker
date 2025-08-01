const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 👉 Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// 👉 Servir index.html en la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const readData = (filename) => {
  const pathFile = path.join(__dirname, 'data', filename);
  return JSON.parse(fs.readFileSync(pathFile, 'utf8'));
};

const writeData = (filename, data) => {
  const pathFile = path.join(__dirname, 'data', filename);
  fs.writeFileSync(pathFile, JSON.stringify(data, null, 2));
};

app.get('/api/products', (req, res) => {
  const products = readData('products.json');
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const products = readData('products.json');
  const newProduct = req.body;
  products.push(newProduct);
  writeData('products.json', products);
  res.status(201).json(newProduct);
});

app.get('/api/sales', (req, res) => {
  const sales = readData('sales.json');
  res.json(sales);
});

app.post('/api/sales', (req, res) => {
  const sales = readData('sales.json');
  const newSale = req.body;
  sales.push(newSale);
  writeData('sales.json', sales);
  res.status(201).json(newSale);
});

app.get('/api/expenses', (req, res) => {
  const expenses = readData('expenses.json');
  res.json(expenses);
});

app.post('/api/expenses', (req, res) => {
  const expenses = readData('expenses.json');
  const newExpense = req.body;
  expenses.push(newExpense);
  writeData('expenses.json', expenses);
  res.status(201).json(newExpense);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
