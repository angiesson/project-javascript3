import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Productdetails } from './routes/productdetails/productdetails';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:id', component: Productdetails }
];
