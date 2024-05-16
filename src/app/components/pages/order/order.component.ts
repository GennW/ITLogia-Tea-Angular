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
  orderSuccess: boolean = false; // Флаг успешного заказа
  // Добавляем переменную для хранения состояния доступности кнопки
  isButtonDisabled: boolean = false;
  showError: boolean = false;

  orderForm = new FormGroup({
    product: new FormControl({ value: '', disabled: true }),
    comment: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\+?[0-9]{11}$'),
    ]),
    counrty: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 \\-\\/]*$'),
    ]),
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
    this.activeRoute.paramMap.subscribe((params) => {
      console.log(params);
      const productParam = params.get('title');
      if (productParam) {
        console.log(productParam);
        this.orderForm.patchValue({ product: productParam });
      }
    });
  }
  // ngOnInit(): void {
  //   this.activeRoute.queryParams.subscribe(data => {
  //     console.log(data['product'])

  //     if (data['product']) {
  //     console.log(data['product'])

  //     }
  //   })
  // }

  // makeOrder() {
  //   this.isButtonDisabled = true; // Блокировать кнопку в процессе отправки запроса
  //   const data = {
  //     name: this.orderForm.controls.name.value,
  //     last_name: this.orderForm.controls.last_name.value,
  //     phone: this.orderForm.controls.phone.value,
  //     country: this.orderForm.controls.counrty.value,
  //     zip: this.orderForm.controls.zip.value,
  //     product: this.orderForm.controls.product.value,
  //     address: this.orderForm.controls.address.value,
  //     comment: this.orderForm.controls.comment.value,
  //   }
  //   if (this.orderForm.valid) {
  //         this.http.post<{success: number}>('https://testologia.ru/order-tea', data)
  //     .subscribe(response => {
  //       if (response.success === 1) {
  //         this.isButtonDisabled = false; // Разблокировать кнопку при получении ответа
  //         this.orderSuccess = true; // Устанавливаем флаг успешного заказа в true
  //         this.orderForm.reset(); // Очистить форму
  //       } else {
  //         this.orderSuccess = false; // Устанавливаем флаг успешного заказа в false
  //       }
  //     });
  // }
  //   }

  makeOrder() {
    this.isButtonDisabled = true; // Блокировать кнопку в процессе отправки запроса
    const data = {
      name: this.orderForm.controls.name.value,
      last_name: this.orderForm.controls.last_name.value,
      phone: this.orderForm.controls.phone.value,
      country: this.orderForm.controls.counrty.value,
      zip: this.orderForm.controls.zip.value,
      product: this.orderForm.controls.product.value,
      address: this.orderForm.controls.address.value,
      comment: this.orderForm.controls.comment.value,
    };
  
    
      this.http
        .post<{ success: number }>('https://testologia.ru/order-tea', data)
        .subscribe({
          next: (response) => {
            this.isButtonDisabled = false; // Разблокировать кнопку при получении ответа
            if (response.success === 1) {
              this.orderSuccess = true; // Устанавливаем флаг успешного заказа в true
              this.orderForm.reset(); // Очистить форму
            } else {
              this.orderSuccess = false; // Устанавливаем флаг успешного заказа в false
              this.showError = true; // Показываем ошибку
              setTimeout(() => {
                this.showError = false; // Спустя 3 секунды скрываем ошибку
              }, 3000);
            }
          },
          error: (error) => {
            this.isButtonDisabled = false; // Разблокировать кнопку при ошибке
            this.showError = true; // Показываем ошибку
            setTimeout(() => {
              this.showError = false; // Спустя 3 секунды скрываем ошибку
            }, 3000);
          },
        });
    
  }
  
}
