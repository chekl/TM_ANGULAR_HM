import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct, Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  public newProduct: IProduct = new Product('', '', 0, [], UUID.UUID());
  public isEdit: boolean = false;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      const editProduct = this.productsService.getProductById(id);

      if (editProduct) {
        this.newProduct = editProduct;
        this.isEdit = true;
      }
    }
  }

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public navigateBack(): void {
    this.router.navigate(['..']);
  }

  public addProduct(): void {
    this.productsService.addProduct(this.newProduct);
    this.navigateBack();
  }

  public updateProduct(): void {
    this.productsService.updateProduct(this.newProduct);
    this.navigateBack();
  }
}
