import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly products = [
    { id: 'Phone', price: 699 },
    { id: 'Tablet', price: 149 },
    { id: 'Laptop', price: 999 },
  ] as Product[];

  constructor() {}

  addProduct(product: Product) {
    this.products.push(product);
  }
}
