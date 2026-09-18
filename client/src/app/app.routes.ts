import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Productdetails } from './routes/productdetails/productdetails';
import { Products } from './routes/admin/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:id', component: Productdetails },
  { path: 'admin/products', component: Products }
];
