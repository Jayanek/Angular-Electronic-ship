import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order } from '../models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  
userId
@Input('cart-items') cartItems

 constructor(private auth:AuthService,private orderService:OrderService) { }

  save(shippingData){
    
    let order = new Order(shippingData,this.cartItems.items,this.userId)
    console.log(order)
    //this.orderService.Save(order)
    
  }

  async ngOnInit(){
      this.auth.user$.subscribe(user => this.userId=user.uid)
  }

}
