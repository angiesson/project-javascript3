import { Component, inject, signal } from '@angular/core';
import { Productlist } from '../../components/productlist/productlist';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [Productlist],
  selector: 'app-search-results',
  styleUrl: './search-results.css',
  templateUrl: './search-results.html',
})
export class SearchResults {

  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  products = signal<Product[]>([]);
  searchTerm = signal('');

ngOnInit() {
  this.route.queryParamMap.subscribe(params => {
    const query = params.get('q') ?? '';

    this.searchTerm.set(query);

    this.productService.getProducts()
      .subscribe(products => {
        const filteredProducts = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );

        this.products.set(filteredProducts);
      });
  });
}
}
