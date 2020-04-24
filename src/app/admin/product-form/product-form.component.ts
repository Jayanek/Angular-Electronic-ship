import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import {take} from 'rxjs/operators'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id
  categories$
  product:any={}
  constructor(private categoryService:CategoryService,private productService:ProductService,private route:Router,private router:ActivatedRoute) {
     this.categories$=this.categoryService.get()
     this.id = this.router.snapshot.paramMap.get('id')
     if(this.id) this.product=this.productService.getSingle(this.id).snapshotChanges()
     .pipe(take(1)).subscribe(product => this.product=product.payload.val())
   }

   save(product:Product){
      
      if(this.id) this.productService.update(this.id,product)
      else this.productService.create(product)
      
      this.route.navigate(['/admin/products'])
   }

  ngOnInit(): void {
  }

}
