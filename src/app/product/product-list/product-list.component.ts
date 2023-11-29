import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct, Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public products$: Observable<IProduct[]> = this.productsService.products$;

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  public deleteProductById(id: string) {
    this.productsService.deleteProductById(id);
  }

  public navigateToCreate(): void {
    this.router.navigate(['create-product']);
  }

  public navigateToDetail(id: string): void {
    this.router.navigate(['product', id]);
  }
}
