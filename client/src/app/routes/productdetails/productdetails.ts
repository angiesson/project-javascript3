import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [],
  selector: 'app-productdetails',
  styleUrl: './productdetails.css',
  templateUrl: './productdetails.html',
})
export class Productdetails {
  private route = inject(ActivatedRoute);

  private productService = inject(ProductService);

    ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService.getProduct(id)
      .subscribe(product => console.log(product));
      };
  }
}
