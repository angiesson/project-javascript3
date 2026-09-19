import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../../models/Product';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})

export class Products {
  private productService = inject(ProductService);


  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
}
