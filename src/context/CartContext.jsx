import { createContext, useContext, useState } from "react";

const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (newProduct)=>{
        const idx = cartList.findIndex(producto => newProduct.id == producto.id)

        if (idx == -1) {
           setCartList([
                ...cartList, 
                newProduct
            ]) 
        } else {
            cartList[idx].cantidad += newProduct.cantidad
            setCartList([...cartList])
        }
        
    }

    const cantidadTotal = () => cartList.reduce((total, objproducto)=> total += objproducto.cantidad, 0)

    const precioTotal = () => cartList.reduce((total, objProducto)=> total += (objProducto.cantidad * objProducto.precio), 0)

    const eliminarProducto = (pid) =>{
        setCartList(cartList.filter(producto => producto.id != pid))
    }

    const vaciarCarrito = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}