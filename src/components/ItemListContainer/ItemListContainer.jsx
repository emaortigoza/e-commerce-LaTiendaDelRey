import { useEffect, useState } from "react"
import mFetch from "../../utils/mFetch"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import './ItemListContainer.css'


function ItemListContainer({greeting}) {
    const[productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() =>{
      mFetch()
      .then( resultado => {
        setProductos(resultado)
      })
      .catch( error => console.log(error))
      .finally(()=> setloading(false))
    },[])

  return (
    <Container fluid className="contenedor">
      <Row className="mt-5 catalogo">
            { loading ? <h2>Cargando...</h2>
                      :
                       productos.map( producto => 
                                                <Col className="col-xl-3 columnas">
                                                <Card className="card" key={producto.id} style={{ width: '18rem' }}>
                                                    <Card.Img className="img" variant="top" src={producto.foto} alt={producto.nombre} />
                                                    <Card.Body>
                                                      <Card.Title>{producto.nombre}</Card.Title>
                                                      <Card.Text>
                                                        {producto.categoria}
                                                        <br />
                                                        Some quick example text to build on the card title and make up the
                                                         bulk of the card's content.
                                                      </Card.Text>
                                                      <Card.Text>$ {producto.precio}</Card.Text>
                                                     <Button text-center variant="primary">Detalle</Button>
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