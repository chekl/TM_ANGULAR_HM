import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { TagsService } from '../../tag/services/tags.service';
import { ITag } from '../../tag/tag.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  public filterTags: string[] = [];

  public filteredProducts: IProduct[] | undefined = [];

  public tags$: Observable<ITag[]> = this.tagsService.tags$;

  ngOnInit(): void {
    this.updateProductList();
  }

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private tagsService: TagsService
  ) {}

  public updateProductList(): void {
    this.filteredProducts = this.productsService.getFilteredProducts(
      this.filterTags
    );
  }

  public deleteProductById(id: string) {
    this.productsService.deleteProductById(id);

    this.updateProductList();
  }

  public navigateToCreate(): void {
    this.router.navigate(['create-product']);
  }

  public navigateToDetail(id: string): void {
    this.router.navigate(['product', id]);
  }

  public navigateToTags(): void {
    this.router.navigate(['tags']);
  }

  public toggleSelection(selectedTag: string): void {
    this.filterTags.includes(selectedTag)
      ? (this.filterTags = this.filterTags.filter((tag) => tag !== selectedTag))
      : this.filterTags.push(selectedTag);

    this.updateProductList();
  }

  public clearFilter(): void {
    this.filterTags = [];
    this.updateProductList();
  }
}
