import { Component, inject, signal } from '@angular/core';
import { Product } from '../../../models/Product';
import { Productlist } from '../../productlist/productlist';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [Productlist],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

private productService = inject(ProductService);

products = signal<Product[]>([]);

// Anropa servern och hämta produkter
ngOnInit() {
   this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
  });
}
}
