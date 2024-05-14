import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../../types/product.type';

@Component({
  selector: 'product-about',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
    };
  }
  ngOnInit(): void {
  }

}
