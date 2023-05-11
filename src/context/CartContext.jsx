import { createContext, useContext, useState } from "react";

const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (newProduct)=>{
        setCartList([...cartList, newProduct])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}