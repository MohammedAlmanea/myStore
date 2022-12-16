import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router'
import { OrderService } from 'src/app/services/order/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart : cartProduct[] =[]
  credit: string = ''

  order: Order = {
    name: '',
    address: '',
    cart: [],
    id:0,
    total:0 
  }

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.totalPrice()
  }

  updateCart(prodcut: cartProduct)
  {
    this.cartService.updateCart(prodcut)
    alert('Your cart is updated')
  }
  totalPrice(): number {
    this.order.total = this.cartService.totalPrice();
    return this.order.total
  }
  makeOrder() {
    this.order.cart = this.cart
    this.orderService.makeOrder(this.order)
    alert('Order has been made!')
    this.router.navigate(['cart/confirmation'])
  }

}
