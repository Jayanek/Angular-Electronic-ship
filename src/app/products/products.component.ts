import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[]
  filteredProducts:any=[]
  category
  constructor(private productService:ProductService,private router:ActivatedRoute) {
     this.products=this.productService.getAll()
     .pipe(switchMap(products =>{
      this.products=products
      return this.router.queryParamMap
     })).subscribe(params =>{
      this.category=params.get('category')

      this.filteredProducts = (this.category) ? this.products.filter(p => p.data.category === this.category) : this.products

    })
      
   
     
     
    }

  ngOnInit(): void {
  }

}
