import { Injectable } from '@angular/core';
import { IProduct } from '../product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _products$: BehaviorSubject<IProduct[]> =
    new BehaviorSubject<IProduct[]>([]);
  public readonly products$ = this._products$.asObservable();

  get products(): IProduct[] {
    return this._products$.getValue();
  }

  private set products(products: IProduct[]) {
    this._products$.next(products);
  }

  public setProducts(products: IProduct[]): void {
    this.products = products;
  }

  public addProduct(newProduct: IProduct): void {
    this.products = [...this.products, newProduct];
  }

  public getProductById(id: string): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  public deleteProductById(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  public updateProduct(updatedProduct: IProduct): void {
    this.products.map((product) =>
      product.id === updatedProduct.id ? (product = updatedProduct) : product
    );
  }
}
