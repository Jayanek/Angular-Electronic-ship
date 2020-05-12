import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{

    public items:ShoppingCartItem[]=[]

    constructor(public itemsObj:{[key:string]:any}){
        for(let productId in itemsObj){
            
            this.items.push(new ShoppingCartItem(productId,itemsObj[productId].product,itemsObj[productId].quantity))
        }
        
       // console.log(this.items)
    }

   

    public getQuantity(productId){
        
        if(!this.itemsObj) return 0
      
        return (this.itemsObj[productId]) ?  this.itemsObj[productId].quantity:0
        
      }

    
   
    get getTotal(){
        let count=0;
        for(let item in this.items){
            count+=this.items[item].quantity
        }

        return count
    }

    get getItemsTotal(){
        let sum=0
        for(let item in this.items){
            sum += this.items[item].itemTotalPrice
        }
        return sum
    }
}