import Database from 'better-sqlite3';
import { products } from './data/products.js';

const db = new Database('database.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    sku TEXT NOT NULL,
    imageUrl TEXT NOT NULL
  )
`);

const productCount = db
  .prepare('SELECT COUNT(*) AS count FROM products')
  .get() as { count: number };

const insertProduct = db.prepare(`
  INSERT INTO products (name, slug, description, price, sku, imageUrl)
  VALUES (?, ?, ?, ?, ?, ?)
`);

if (productCount.count === 0) {
  for (const product of products) {
    insertProduct.run(
      product.name,
      product.slug,
      product.description,
      product.price,
      product.sku,
      product.imageUrl
    );
  }
}

export default db;