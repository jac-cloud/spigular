import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../product.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [NgIf, NgFor, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  search = '';
  product?: Product;
  products?: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService
  ) {
    this.products = productService.products;
  }

  ngOnInit() {
    // set search input to the value of the query param search
    this.search = this.route.snapshot.queryParamMap.get('search') || '';

    this.handleSearch();

    const id = this.route.snapshot.paramMap.get('id');
    const product = this.productService.products.find((p) => p.id === id);
    if (product) {
      this.product = product;
    }
    console.log(id);
  }

  handleSearch() {
    // set query param search to the value of the search input
    this.router.navigate(['/products'], {
      queryParams: { search: this.search },
    });

    this.products = this.productService.products.filter((product) => {
      return product.id.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
