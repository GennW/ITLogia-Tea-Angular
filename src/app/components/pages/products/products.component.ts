import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = [
    {
      id: 1,
      image: '+1.jpg',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },    
    {
      id: 2,
      image: '+2.jpg',
      title: 'Ягодный чай',
      description: 'Нотки ягод позволят вам расслабиться и насладиться великолепием этого чая'
    },

  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

}
