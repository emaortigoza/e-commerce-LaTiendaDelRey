import {  useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
import { Link } from 'react-router-dom'



const ItemDetail = ({producto}) => {
  const [isCant, setIsCant] = useState(false)

  const {agregarAlCarrito, cartList} = useCartContext()

  const onAdd = (cantidad) =>{
    agregarAlCarrito({... producto, cantidad})
    setIsCant(true)
  }
  console.log(cartList)

  return (
    <div className='container'>
      <div className="grilla">
      <section className="imagen">
         <img src={producto.foto} alt="" />
      </section>
      <article className="articulo">
        <h2>{producto.nombre}</h2>
        <h3>{producto.descripcion}</h3>
        <h3>${producto.precio}</h3>
        <h3>Stock: {producto.stock}</h3>
        <div>
        {
          !isCant ? <ItemCount onAdd={onAdd}/> : <>
                                                  <Link to={'/cart'} className='btn btn-outline-danger'>Terminar compra</Link>
                                                  <Link to={'/'} className='btn btn-outline-danger'>Seguir comprando</Link>
                                                 </>
        }
      </div>
      </article>
      
      
    </div>
    </div>
    
      
  )
}

export default ItemDetail