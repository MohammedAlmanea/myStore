import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };

  @Output() event = new EventEmitter();

  constructor(private cartService: CartService) {}

  addToCart(item: Product, quantity: string) {
    this.cartService.addToCart(item, parseInt(quantity));
    this.event.emit(item);
  }
}
