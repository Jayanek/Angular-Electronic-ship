import { Component,Input } from '@angular/core';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent{

  @Input('cart-items') cartItems

}
