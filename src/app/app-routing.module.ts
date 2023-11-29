import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'create-product', component: ProductFormComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'edit-product/:id', component: ProductFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
