import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
order: Order = {
  id: 0,
  name: '',
  address: '',
  cart: [],
  total: 0
}

constructor(private orderService: OrderService) {}

ngOnInit() :void {
  this.order = this.orderService.getOrder()
}
}
