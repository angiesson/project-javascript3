import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/Product';
import { Productlist } from '../../components/productlist/productlist';

@Component({
  imports: [Productlist],
  selector: 'app-productdetails',
  styleUrl: './productdetails.css',
  templateUrl: './productdetails.html',
})
export class Productdetails {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  // Signal som håller reda på den valda produkten
  product = signal<Product | null>(null);

  // Signal som håller reda på tre liknande produkter
  similarProducts = signal<Product[]>([]);

  ngOnInit() {
    // Lyssnar efter vilken produkt (slug) som finns i URL:en
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      if (slug) {

        // Hämtar produkten som användaren har klickat på
        this.productService.getProduct(slug)
          .subscribe(product => {
            this.product.set(product);
          });

        // Hämtar produkter till "Similar products"
        this.productService.getProducts()
          .subscribe(products => {

            // Tar bort den aktuella produkten och väljer tre andra
            const similarProducts = products
              .filter(product => product.slug !== slug)
              .slice(0, 3);

            this.similarProducts.set(similarProducts);
          });
      }
    });
  }
}