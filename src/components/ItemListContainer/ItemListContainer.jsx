import { useEffect, useState } from "react"
import mFetch from "../../utils/mFetch"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

import { Link, useParams } from "react-router-dom"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"

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
    loading ? <h2>Cargando...</h2> : <ItemList productos ={productos}/>
  )
}

export default ItemListContainer