export class Order{


    dateCreated:number

    constructor(public shippingInfo,public cartItems,public userId){

        this.dateCreated = new Date().getTime()

        this.cartItems=cartItems.map(item =>{
            return {
              title : item.product.title,
              category : item.product.category,
              price : item.product.price,
              quantity : item.quantity,
              totalPrice : item.itemTotalPrice
            }
          })

    }
}