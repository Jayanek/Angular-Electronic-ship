import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  
  async getCart(){
    let cartId =  await this.getCartId()
    return this.db.object('shopping-cart/'+cartId).snapshotChanges().pipe(map( items => new ShoppingCart(items.payload.exportVal())))
  }

  async addTocart(product){
    this.changeQuantity(product,1)
  }

  async removeFromCart(product){
    this.changeQuantity(product,-1)
  }

  async clearCart(){
    let cartId =  await this.getCartId()
    this.db.object('shopping-cart/'+cartId+'/').remove()
  }

  private async changeQuantity(product,change){

    let cartItem =await this.getCartItem(product.key)

    cartItem.snapshotChanges().pipe(take(1)).subscribe(item => {
    
        
        let quantity=(!item.payload.exists()) ? 0 : item.payload.exportVal().quantity
        let cartObj = {product:product.data,quantity:quantity+change }
        cartItem.update(cartObj)
        
        if(cartObj.quantity === 0) cartItem.remove() 
      
    })
  }

  private async getCartId(){

    let cartId = localStorage.getItem('cartId')

    if(!cartId){
      cartId = await this.create().key 
      localStorage.setItem('cartId',cartId)
    }

    return cartId
  }

  private async getCartItem(productId){
    let cartId =  await this.getCartId()
    return this.db.object('shopping-cart/'+cartId+'/'+productId)
  }

  private create(){
    return this.db.list('shopping-cart/').push({dateCreated:new Date().getTime()})
  }
}
