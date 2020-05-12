export class ShoppingCartItem{

 
    constructor(public key:string,public product:any,public quantity:number){}

    get itemTotalPrice(){
        return this.product.price*this.quantity
    }

    
}