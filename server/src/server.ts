import express from "express";

// Skapa expressapplikation
const app = express();

// Bestäm vilken port servern ska använda
const port = process.env.PORT || 8000;

// Skapa endpoints som svarar på HTTP GET för api/products
app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Svart T-shirt",
      price: 199
    },
    {
      id: 2,
      name: "Blå jeans",
      price: 499
    },
    {
      id: 3,
      name: "Vit hoodie",
      price: 399
    }
  ]);
});

// Starta servern
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});