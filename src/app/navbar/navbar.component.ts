import { Observable } from 'rxjs';
import { IsAdminService } from './../is-admin.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  cart$:Observable<ShoppingCart>
  constructor(public auth:AuthService,public admin:IsAdminService,private cartService:ShoppingCartService) {}

  logout(){
    this.auth.userLogout()
  }

   async ngOnInit(){
    this.cart$ = await this.cartService.getCart()
  }
  
}
