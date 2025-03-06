import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService, Product } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<Observable<Product[]>> {
  constructor(private productService: ProductService) {}

  resolve(): Observable<Product[]> {
    return of(this.productService.products);
  }
}
