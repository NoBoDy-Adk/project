import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/Storecontext'
const Cart = () => {
  const{cartitems,food_list,removeFromCart}=useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartitems[item._id]>0){
            return (
              <div className="cart-items-list" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>₹{item.price * cartitems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          }
        })}
      </div>
      
    </div>
  )
}

export default Cart
