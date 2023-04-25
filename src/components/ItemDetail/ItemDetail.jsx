

const ItemDetail = (producto) => {
  return (
    <div className="row">
      <div className="col">
        <img src={producto.foto} alt="" />
        <h2>Nombre: {producto.nombre}</h2>
        <h2>{producto.descripcion}</h2>
        <h2>${producto.precio}</h2>
        <h2>Stock: {producto.stock}</h2>
      </div>
    </div>
  )
}

export default ItemDetail