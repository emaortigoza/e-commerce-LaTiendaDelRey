import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartModal.css'
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const CartModal = () => {
  
  const{cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()


  return (

    <div class="cart-container">
      { cartList.length != 0 ?
              <>
                  {cartList.map(producto =>(
                    <div className='cart-item'>
                        <img className='w-25' src={producto.foto} alt="imagen" />
                        <div className="items-details">
                          <h2>Cantidad : {producto.cantidad}</h2>
                          <p>Precio ${producto.precio}</p>
                        </div>
                        <button className='remove-item' onClick={()=>eliminarProducto(producto.id)}>X</button>
                    </div>
                    ))
                  }

                <div className='total-section'>
                    <h3>Total a pagar : <strong>${precioTotal()}</strong> </h3>
                  <div className="action-buttons">
                    <button onClick={vaciarCarrito} className='btn-clear'>Vaciar carrito</button>
                  <Link to='../Formulario'><button  className='btn-complete'>Finalizar compra</button></Link>
                  <Link to='/'><button className='btn-continue'>Seguir comprando</button></Link>  
                  </div>
                  </div>
                  
                  
                
              </>
              : <div>
                <h2>El carrito esta vacio</h2>
                <Link to='/'><button className='btn btn-danger'>Volver a inicio</button></Link>
                </div>
                
              }   
    </div>
      
    
  )
}

export default CartModal