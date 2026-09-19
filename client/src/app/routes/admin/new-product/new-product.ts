import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-new-product',
  styleUrl: './new-product.css',
  templateUrl: './new-product.html',
})
export class NewProduct {

  private productService = inject(ProductService);

newProductForm = new FormGroup({
  name: new FormControl('', { nonNullable: true }),
  description: new FormControl('', { nonNullable: true }),
  price: new FormControl<number | null>(null),
  sku: new FormControl('', { nonNullable: true }),
  imageUrl: new FormControl('', { nonNullable: true }),
});

onSubmit() {
  const price = this.newProductForm.controls.price.value;

  if (price === null) {
    return;
  }

  const product = {
    name: this.newProductForm.controls.name.value,
    description: this.newProductForm.controls.description.value,
    price: price,
    sku: this.newProductForm.controls.sku.value,
    imageUrl: this.newProductForm.controls.imageUrl.value,
  };

  this.productService.addProduct(product).subscribe({
    next: (createdProduct) => {
      console.log('Product created:', createdProduct);
    },
    error: (error) => {
      console.error('Could not create product:', error);
    }
  });

}
}
