import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  item: cartProduct = {
    id: 0,
    name: '',
    amount: 0,
    description: '',
    price: 0,
    url: '',
  };
  cart: cartProduct[] = [];

  constructor() {}

  addToCart(item: Product, quantity: number): void {
    let temp = this.cart.filter((item2) => item2.id === item.id);
    if (temp.length) {
      this.item.amount += quantity;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        amount: quantity,
        description: item.description,
        price: item.price,
        url: item.url,
      });
    }
    alert('Product added!')
  }

  getCart(): cartProduct[] {
    return this.cart;
  }

  updateCart(product: cartProduct): void{
    if (product.amount === 0) {
      this.cart.forEach((item2, index) => {
        if (product.name === item2.name) {
          this.cart.splice(index, 1);
        }
      });
    } else {
      this.item.amount = product.amount;
    }
  }

  totalPrice () : number {
    let total = 0;
    this.cart.forEach(item => {
      total+= item.price * item.amount
    })
    return total
  }
}
