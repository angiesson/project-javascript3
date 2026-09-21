import express from "express";
import db from './database.js';

// Skapa expressapplikation
const app = express();

app.use(express.json());

// Bestäm vilken port servern ska använda
const port = process.env.PORT || 8000;

// Hämta alla produkter från databasen
app.get("/api/products", (req, res) => {
    const products = db
    .prepare('SELECT * FROM products')
    .all();
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const { name, description, price, sku, imageUrl } = req.body;

  const result = db
  .prepare(`
    INSERT INTO products (name, description, price, sku, imageUrl)
    VALUES (?, ?, ?, ?, ?)
  `)
  .run(name, description, price, sku, imageUrl);

  const newProduct = db
  .prepare('SELECT * FROM products WHERE id = ?')
  .get(result.lastInsertRowid);

  res.status(201).json(newProduct);
});


// Hämtar en specifik produkt baserat på ID
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

    const product = db
    .prepare('SELECT * FROM products WHERE id = ?')
    .get(id);

  res.json(product);
});


// Starta servern
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});