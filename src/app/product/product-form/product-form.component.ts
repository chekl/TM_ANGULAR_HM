import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct, Product } from '../product.model';
import { TagsService } from '../../tag/services/tags.service';
import { Observable } from 'rxjs';
import { ITag } from '../../tag/tag.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  public newProduct: IProduct = new Product('', '', 0, [], UUID.UUID());
  public isEdit: boolean = false;
  public tags$: Observable<ITag[]> = this.tagsService.tags$;

  public productForm = this.formBuilder.group({
    name: [
      this.newProduct.name,
      [Validators.required, Validators.pattern(/[\S]/)],
    ],
    description: [this.newProduct.description],
    price: [this.newProduct.price, [Validators.required, Validators.min(0)]],
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      const editProduct = this.productsService.getProductById(id);

      if (editProduct) {
        this.newProduct = editProduct;
        this.isEdit = true;

        this.productForm = this.formBuilder.group({
          name: [
            this.newProduct.name,
            [Validators.required, Validators.pattern(/[\S]/)],
          ],
          description: [this.newProduct.description],
          price: [
            this.newProduct.price,
            [Validators.required, Validators.min(0)],
          ],
        });
      }
    }
  }

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private tagsService: TagsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public navigateBack(): void {
    this.router.navigate(['']);
  }

  public addProduct(): void {
    this.productsService.addProduct(this.newProduct);
    this.navigateBack();
  }

  public updateProduct(): void {
    this.productsService.updateProduct(this.newProduct);
    this.navigateBack();
  }

  public onChange(chosenTag: ITag, isChecked: boolean): void {
    if (isChecked) {
      this.newProduct.tags.push(chosenTag);
    } else {
      this.newProduct.tags = this.newProduct.tags.filter(
        (tag) => tag.id !== chosenTag.id
      );
    }
  }

  public onSubmit() {
    const formValues = this.productForm.value;

    this.newProduct = {
      ...this.newProduct,
      name: formValues.name || '',
      description: formValues.description || '',
      price: formValues.price || 0,
    };

    this.isEdit ? this.updateProduct() : this.addProduct();
  }
}
