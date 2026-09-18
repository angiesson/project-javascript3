import express from "express";
import { products } from "./data/products.js";

// Skapa expressapplikation
const app = express();

// Bestäm vilken port servern ska använda
const port = process.env.PORT || 8000;

// Skapa endpoints som svarar på HTTP GET för api/products
app.get("/api/products", (req, res) => {
  res.json(products);
});


// Hämtar en specifik produkt baserat på ID
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  res.json(product);
});


// Starta servern
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});