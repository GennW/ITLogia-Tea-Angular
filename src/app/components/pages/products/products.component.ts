import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductType[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ProductType[]>('https://testologia.ru/tea')
    .subscribe(data => {
      this.products = data
    })

  }

}
