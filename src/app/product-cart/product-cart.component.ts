import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';



@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit{
  @Input('product') product
  @Input('showAction') showAction:boolean
  @Input('shopping-cart') shoppingCart$
  constructor(private cartService:ShoppingCartService) { }

addTocart(){
  this.cartService.addTocart(this.product)
}


async ngOnInit(){
  this.shoppingCart$=(await this.cartService.getCart())
}


}
