import {  useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
import { Link } from 'react-router-dom'






const ItemDetail = ({producto}) => {
  const [isCant, setIsCant] = useState(false)

  const {agregarAlCarrito, cartList} = useCartContext()

 


  const onAdd = (cantidad) =>{
  agregarAlCarrito( { ...producto, cantidad} )
  setIsCant(true)
  
}



  return (

    <div class="product-detail">
      <div class="product-image">
          <img src={producto.foto} alt={producto.nombre}/>
      </div>
    <div class="product-info">
        <div class="product-title">{producto.nombre}</div>
        <div class="product-description">
        {producto.descripcion}
        </div>
        <div class="product-price">${producto.precio}</div>
        <div class="product-stock">Stock: {producto.stock}</div>
        <div class="quantity-container">
        {
                !isCant ? <ItemCount onAdd={onAdd}/> : <>
                                                        <div className='boton'>
                                                          <Link to={'/cartModal'} className='button-1'>Terminar compra</Link>
                                                          <Link to={'/'} className='button-1'>Seguir comprando</Link>
                                                        </div>
                                                       
                                                      </>
              }
        </div>
    </div>
</div>


  )
}

export default ItemDetail