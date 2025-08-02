import { createContext, useEffect } from "react";
export const StoreContext = createContext(null)
import { food_list } from "../assets/assets";
import React, { useState } from 'react';
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
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
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    const contentValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems
    }
    return(
        <StoreContext.Provider value={contentValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;