import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../../models/Product';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})

export class Products {
  private productService = inject(ProductService);

  private router = inject(Router);

  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  // Programatiskt navigera till en annan sida med hjälp av Angular Router
   navigateToPage(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
