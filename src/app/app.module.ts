import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
