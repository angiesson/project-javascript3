import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../models/Product';
import { Productlist } from './productlist/productlist';

@Component({
  selector: 'app-root',
  imports: [Productlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');


// Injicera http-client - kallas "dependecy injection"
private http = inject(HttpClient);

products = signal<Product[]>([]);

// Anropa servern och hämta produkter
ngOnInit() {
  this.http.get('/api/products').subscribe((products) => {
    this.products.set(products as Product[]);
  });
}
}