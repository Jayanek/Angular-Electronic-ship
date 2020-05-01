import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products=[]
  filteredProductd:any=[]

  constructor(private productService:ProductService) {
    this.productService.getAll().subscribe(products => this.products=this.filteredProductd=products)
   }

  search(query:string){
    
    this.filteredProductd = (query) ? 
                this.products.filter(p => p.data.title.toLowerCase().includes(query.toLowerCase())):
                this.products
  }

  ngOnInit(): void {
  }

}
