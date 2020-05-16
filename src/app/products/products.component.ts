import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Subscription, Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products:any=[]
  filteredProducts:any=[]
  category
  shoppingCart$

  constructor(private productService:ProductService,private router:ActivatedRoute,private cartService:ShoppingCartService) {
     this.products=this.productService.getAll()
     .pipe(switchMap(products =>{
      this.products=products
      return this.router.queryParamMap
     })).subscribe(params =>{
      this.category=params.get('category')

      this.filteredProducts = (this.category) ? this.products.filter(p => p.data.category === this.category) : this.products

    }) }

    async ngOnInit(){
      this.shoppingCart$=await this.cartService.getCart()
     }

    

}
