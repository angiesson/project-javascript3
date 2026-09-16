import { Component, input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  imports: [],
  selector: 'app-productlist',
  styleUrl: './productlist.css',
  templateUrl: './productlist.html',
})
export class Productlist {
  
  products = input.required<Product[]>();
}
