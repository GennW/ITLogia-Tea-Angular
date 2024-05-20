import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from '../../../../types/product.type';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: ProductType;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    };
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const productId = params['id']; // Получение параметра id из запроса
      if (productId) {
        this.productService.getProduct(productId).subscribe((data: ProductType) => {
          this.product = data; // Присвоение полученного товара свойству product
        });
      }
    });
  }
}
