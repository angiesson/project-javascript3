import { Component, inject, signal } from '@angular/core';
import { Product } from '../../../models/Product';
import { Productlist } from '../../components/productlist/productlist';
import { ProductService } from '../../services/product.service';
import { Hero } from '../../components/hero/hero';

@Component({
  imports: [Productlist, Hero],
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
