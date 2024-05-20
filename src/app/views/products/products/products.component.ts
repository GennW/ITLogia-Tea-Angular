import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../../../types/product.type';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];
  filteredProducts: ProductType[] = [];
  showNoResultsMessage: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.route.queryParams.subscribe(params => {
        const search = params['search'];
        if (search) {
          this.filterProducts(search);
        } else {
          this.filteredProducts = this.products;
        }
      });
    });
  }

  filterProducts(search: string) {
    this.filteredProducts = this.products.filter(product =>
      product.description.toLowerCase().includes(search.toLowerCase())
    );
    this.showNoResultsMessage = this.filteredProducts.length === 0;
  }
}
