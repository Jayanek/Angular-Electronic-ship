import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:Observable<ShoppingCart>
  constructor(private cartService:ShoppingCartService) { }

  clearTheCart(){
    this.cartService.clearCart()
  }

  async ngOnInit(){
    this.cart$ = await this.cartService.getCart()
  }

}
