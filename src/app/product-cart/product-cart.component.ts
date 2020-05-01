import { take } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input('product') product
  @Input('showAction') showAction:boolean
  
  constructor() { }


  ngOnInit(): void {
  }

}
