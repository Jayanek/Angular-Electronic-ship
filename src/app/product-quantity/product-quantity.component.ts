import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{

  @Input('product') product
  @Input('quantity') quantity:number

  constructor(private cartService:ShoppingCartService) { }

  addTocart(){
    this.cartService.addTocart(this.product)
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product)
  }


}
