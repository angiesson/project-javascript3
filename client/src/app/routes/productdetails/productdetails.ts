import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/Product';

@Component({
  imports: [],
  selector: 'app-productdetails',
  styleUrl: './productdetails.css',
  templateUrl: './productdetails.html',
})
export class Productdetails {
  private route = inject(ActivatedRoute);

  private productService = inject(ProductService);

  // Signal som håller reda på det valda produktobjektet
  product = signal<Product | null>(null);

    ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService.getProduct(id)
      .subscribe(product => this.product.set(product));
      };
  }
}
