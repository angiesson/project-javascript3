import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewProduct, Product } from '../../models/Product';

@Service()
export class ProductService {
      // Injicera http-client - kallas "dependecy injection"
private http = inject(HttpClient);

getProducts() {
    return this.http.get<Product[]>('/api/products');
  }

  // Hämtar en specifik produkt baserat på dess slug

  getProduct(slug: string) {
    return this.http.get<Product>(`/api/products/${slug}`);
  }

  addProduct(product: NewProduct) {
  return this.http.post<Product>('/api/products', product);
}
}
