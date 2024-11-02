import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <Container fluid className="container">
      <section className="gallery__container">
            
                      { productos.map( producto => <Item key={producto.id} producto={producto}/>  ) }
      </section>
    </Container>
  )
}

export default ItemList