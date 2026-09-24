import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-new-product',
  styleUrl: './new-product.css',
  templateUrl: './new-product.html',
})
export class NewProduct {

  private productService = inject(ProductService);
  private router = inject(Router);

newProductForm = new FormGroup({
  name: new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/.*[a-zA-ZÅÄÖåäö].*/)
    ]
  }),

  description: new FormControl('', {
    nonNullable: true
  }),

  price: new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1)
  ]),

  sku: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  }),

  imageUrl: new FormControl('', {
    nonNullable: true
  }),
});

onSubmit() {
if (this.newProductForm.invalid) {
  this.newProductForm.markAllAsTouched();
  return;
}

  const price = this.newProductForm.controls.price.value;

  if (price === null) {
    return;
  }

const name = this.newProductForm.controls.name.value;

const slug = name
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-');

  const product = {
    name: this.newProductForm.controls.name.value,
    slug: slug,
    description: this.newProductForm.controls.description.value,
    price: price,
    sku: this.newProductForm.controls.sku.value,
    imageUrl: this.newProductForm.controls.imageUrl.value,
  };

  this.productService.addProduct(product).subscribe({
    next: (createdProduct) => {
       this.router.navigate(['/admin/products']);
    },
    error: (error) => {
      console.error('Could not create product:', error);
    }
  });

}
}
