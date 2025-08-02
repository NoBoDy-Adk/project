import { createContext } from "react";
export const StoreContext = createContext(null)
import { food_list } from "../assets/assets";
const StoreContextProvider = (props) => {
    const contentValue = {
        food_list
    }
    return(
        <StoreContext.Provider value={contentValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;