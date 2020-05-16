import { Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems$:Observable<ShoppingCart>

 constructor(private shoppingCartService:ShoppingCartService) { }



  async ngOnInit(){
    this.cartItems$=await this.shoppingCartService.getCart()

  }


}
