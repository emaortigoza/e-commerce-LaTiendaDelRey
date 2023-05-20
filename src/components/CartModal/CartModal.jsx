import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartModal.css'
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const CartModal = () => {
  
  const{cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()


  return (
    
    <div className='container-fluid inner'>
      <div className='cartModal'>
            { cartList.length != 0 ?
              <>
                  {cartList.map(producto =>(
                    <div className='container-fluid w-50'>
                      <div className="items">
                        <img className='w-25' src={producto.foto} alt="imagen" />
                        <label className='label'>Cantidad : {producto.cantidad}</label>
                        <label className='label'>Precio ${producto.precio}</label>
                      <button className='btn btn-danger' onClick={()=>eliminarProducto(producto.id)}>X</button>
                      </div>
                      
                    </div>

                    ))
                  }

                <div className='container-fluid'>
                  <div className="itemsInfo">
                    <h3>Total a pagar : ${precioTotal()}</h3>
                  <div className="boton">
                    <button onClick={vaciarCarrito} className='btn btn-danger'>Vaciar carrito</button>
                  <Link to='../Formulario'><button  className='btn btn-danger'>Finalizar compra</button></Link>
                  <Link to='/'><button className='btn btn-danger'>Seguir comprando</button></Link>  
                  </div>
                  </div>
                  
                  
                </div>
              </>
              : <div>
                <h2>El carrito esta vacio</h2>
                <Link to='/'><button className='btn btn-danger'>Volver a inicio</button></Link>
                </div>
                
              }    
      </div>
    </div>
    
  )
}

export default CartModal