import { createContext, useEffect } from "react";
export const StoreContext = createContext(null)
import { food_list } from "../assets/assets";
import React, { useState } from 'react';
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url="http://localhost:4000"
    const [token,setToken]=useState("");
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) { 
            setCartItems((prev)=>({...prev, [itemId]: 1}));
          }
          else{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
          }
        }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=food_list.find((product)=>product._id===item);
                totalAmount+=iteminfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const contentValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contentValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;