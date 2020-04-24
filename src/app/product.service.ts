import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product:Product){
    this.db.list('products/').push(product)
  }

  getAll(){
    return this.db.list('products/').snapshotChanges()
      .pipe(map(products => products.map(product => {
        const data = product.payload.val()
        const key = product.payload.key
        return {key,data}
      })))
  }

  getSingle(productId){
    return this.db.object('products/'+productId)
  }

  update(productId,Product){
    return this.db.object('products/'+productId).update(Product)
  }
}
