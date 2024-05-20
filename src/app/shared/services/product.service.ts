import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from 'src/types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'https://testologia.ru/tea'; // Установка URL для получения товаров

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.productsUrl); // Выполнение GET-запроса для получения товаров
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.productsUrl}?id=${id}`); // Выполнение GET-запроса для получения конкретного товара
  }
}
