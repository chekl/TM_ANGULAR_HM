import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.product = this.productsService.getProductById(id as string);
  }
  public navigateBack(): void {
    this.router.navigate(['..']);
  }

  public deleteProductById(id: string): void {
    this.productsService.deleteProductById(id);
    this.navigateBack();
  }

  public navigateToEdit(id: string): void {
    this.router.navigate(['edit-product', id]);
  }
}
