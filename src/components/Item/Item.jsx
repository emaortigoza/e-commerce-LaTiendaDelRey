import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Container, Row } from "react-bootstrap"


const Item = ({producto: {id, foto, nombre, categoria, precio, descripcion}}) => {
  return (

        <div className="card-d" key={id}>
          <div className="card-header">
            <h2>{nombre}</h2>
          </div>
          <div className="card-contend">
            <Link className='puente' to={`/detail/${id}`}>
              <img src={foto} alt={nombre} />
            </Link>
            <p>Categoria: <span>{categoria}</span></p>
            <p>Precio: ${precio}</p>
          </div>
          <div className="card-footer">
            <Link className='puente' to={`/detail/${id}`}>
              <button className='boton-agregar'>Agregar al carrito</button>
            </Link>
          </div>
        </div>


    // <Col className="col-xl-3 col-md-6 col-sm-12 columnas">
    //   <Card className="card" key={id}>
    //     <Link to={`/detail/${id}`}>
    //       <Card.Img className="img" variant="top" src={foto} alt={nombre} />
    //     </Link>
    //       <Card.Body className="body">
    //         <Card.Title className='title'>{nombre}</Card.Title>
    //         <Card.Text className='text'>
    //           <Link className='link' to= {`/detail/${id}`}>
    //             {categoria}...
    //           </Link>
    //         </Card.Text>
    //         <Card.Text className='text'>$ {precio}</Card.Text>
    //         <div className='btn-btn'>
    //         <Link to={`/detail/${id}`} className='btn'>Agregar al carrito</Link>
    //         </div>  
    //       </Card.Body>
    //   </Card>
    // </Col>
  )
}

export default Item