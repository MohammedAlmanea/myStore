import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log(this.http.get<Product[]>('assets/data.json'))
    return this.http.get<Product[]>('assets/data.json');
  }

  getProduct(id: number): Observable<Product[]> {
    return this.http
      .get<Product[]>('assets/data.json')
      .pipe(map((products) => products.filter((product) => product.id === id)));
  }
}
