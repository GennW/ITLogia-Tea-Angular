import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderFormType } from '../../types/orderForm.type ';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderData: OrderFormType = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',
  };
  
  orderForm = new FormGroup({
    product: new FormControl({ value: '', disabled: true }),
    comment: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    last_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]),
    counrty: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \\-\\/]*$')]),
  });

  get comment() {
    return this.orderForm.get('comment');
  }
  get name() {
    return this.orderForm.get('name');
  }
  get last_name() {
    return this.orderForm.get('last_name');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get counrty() {
    return this.orderForm.get('counrty');
  }
  get zip() {
    return this.orderForm.get('zip');
  }
  get address() {
    return this.orderForm.get('address');
  }

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(data => {
      console.log(data)
    })
  }

  makeOrder() {
    this.http.post<{success: number}>('https://testologia.ru/order-tea', this.orderData)
      .subscribe(response => {
        if (response.success === 1) {
          // Успешный запрос
          this.orderForm.reset(); // Очистить форму
          // Отобразить текст "Спасибо за заказ!"
        } else {
          // Неуспешный запрос
          // Вывести текст "Произошла ошибка. Попробуйте еще раз."
        }
      });
  }
}
