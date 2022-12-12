import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  // selectedAmout: number = 0;

  constructor() {
    this.product = {
      id:0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }
}
