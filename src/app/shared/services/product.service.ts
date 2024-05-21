import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { ProductType } from 'src/types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'https://testologia.ru/tea'; // Установка URL для получения товаров
  search = new Subject<string>();
  currentSearchQuery: string = '';

  constructor(private http: HttpClient) {}

  getProducts(searchQuery: string = ''): Observable<ProductType[]> {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.set('search', searchQuery);
      console.log(params)
      console.log(searchQuery)
    }
    return this.http.get<ProductType[]>(this.productsUrl, { params })
    .pipe(
      map(product => product.map(product => ({...product, description: product.description.toLowerCase()})))
    ); // Выполнение GET-запроса с параметром search
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.productsUrl}?id=${id}`); // Выполнение GET-запроса для получения конкретного товара
  }
}
