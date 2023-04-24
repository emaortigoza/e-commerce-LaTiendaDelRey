import { useEffect, useState } from "react"
import mFetch from "../../utils/mFetch"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

import { Link, useParams } from "react-router-dom"
import './ItemListContainer.css'

function ItemListContainer({greeting}) {

    const{cid} = useParams();
    console.log(cid)
    const[productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() =>{
      if (!cid) {
        mFetch()
      .then( resultado => {
        setProductos(resultado)
      })
      .catch( error => console.log(error))
      .finally(()=> setloading(false))
      }else{
        mFetch()
      .then( resultado => {
        setProductos(resultado.filter(producto => producto.categoria === cid))
      })
      .catch( error => console.log(error))
      .finally(()=> setloading(false))
      }
    },[cid])

  return (
    <Container fluid className="contenedor">
      <Row className="mt-5 catalogo">
            { loading ? <h2>Cargando...</h2>
                      :
                       productos.map( producto => 
                                                <Col className="col-xl-3 col-md-6 col-sm-12 columnas">
                                                <Card className="card" key={producto.id}>
                                                  <Link to={`/detail/${producto.id}`}>
                                                    <Card.Img className="img" variant="top" src={producto.foto} alt={producto.nombre} />
                                                  </Link>
                                                    <Card.Body className="body">
                                                      <Card.Title>{producto.nombre}</Card.Title>
                                                      <Card.Text>
                                                        {producto.categoria}...
                                                      </Card.Text>
                                                      <Card.Text>$ {producto.precio}</Card.Text>
                                                      <Link to= '/detail'>
                                                      <Button className="button">Detalle</Button>
                                                      </Link>
                                                    </Card.Body>
                                                  </Card>
                                                </Col>
                                                  )  

            } 
      </Row>
    </Container>
   
  )
}

export default ItemListContainer