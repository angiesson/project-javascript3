import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Productdetails } from './routes/productdetails/productdetails';
import { Products } from './routes/admin/products/products';
import { NewProduct } from './routes/admin/new-product/new-product';
import { SearchResults } from './routes/search-results/search-results';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:slug', component: Productdetails },
  { path: 'search-results', component: SearchResults },
  { path: 'admin/products', component: Products },
  { path: 'admin/products/new', component: NewProduct }
];
