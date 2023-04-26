import { useEffect, useState } from "react"
import mFetch from "../../utils/mFetch"
import ItemList from "../ItemList/ItemList"
import { Link, useParams } from "react-router-dom"
import './ItemListContainer.css'
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import ItemSpinner from "../../Spinner/Spinner"

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
    loading ? <ItemSpinner/> : <ItemList productos ={productos}/>
  )
}

export default ItemListContainer