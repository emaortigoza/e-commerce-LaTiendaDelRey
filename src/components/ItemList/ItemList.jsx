import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <Container fluid className="contenedor">
      <Row className="mt-5 catalogo">
            
                      { productos.map( producto => <Item key={producto.id} producto={producto}/>  ) }
      </Row>
    </Container>
  )
}

export default ItemList