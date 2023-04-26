import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Item = ({producto: {id, foto, nombre, categoria, precio, descripcion}}) => {
  return (
    <Col className="col-xl-3 col-md-6 col-sm-12 columnas">
      <Card className="card" key={id}>
        <Link to={`/detail/${id}`}>
          <Card.Img className="img" variant="top" src={foto} alt={nombre} />
        </Link>
          <Card.Body className="body">
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              {categoria}...
            </Card.Text>
            <Card.Text>$ {precio}</Card.Text>
            <Link to= {`/detail/${id}`}>
            <Button className="button">Detalle</Button>
            </Link>
          </Card.Body>
      </Card>
    </Col>
  )
}

export default Item