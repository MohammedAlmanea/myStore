import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Order = {
    address: '',
    id: 0,
    cart: [],
    name: '',
    total: 0,
  };
  constructor() {}

  getOrder() {
    return this.order;
  }

  makeOrder(order: Order) {
    this.order = order;
  }
}
