import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../types/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((data: ProductType[]) => {
      this.products = data; // Присвоение полученных товаров к свойству products
    });
  }
}
