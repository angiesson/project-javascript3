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
  const { name, slug, description, price, sku, imageUrl } = req.body;

  db
  .prepare(`
    INSERT INTO products (name, slug, description, price, sku, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?)
  `)
  .run(name, slug, description, price, sku, imageUrl);

  const newProduct = db
  .prepare('SELECT * FROM products WHERE slug = ?')
  .get(slug);

  res.status(201).json(newProduct);
});


// Hämtar en specifik produkt baserat på slug
app.get("/api/products/:slug", (req, res) => {
  const slug = req.params.slug;

  const product = db
  .prepare('SELECT * FROM products WHERE slug = ?')
  .get(slug);

  res.json(product);
});


// Starta servern
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});