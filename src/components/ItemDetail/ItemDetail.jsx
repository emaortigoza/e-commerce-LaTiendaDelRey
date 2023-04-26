import './itemDetail.css'

const ItemDetail = ({producto}) => {
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
      </article>
    </div>
    </div>
    
      
  )
}

export default ItemDetail