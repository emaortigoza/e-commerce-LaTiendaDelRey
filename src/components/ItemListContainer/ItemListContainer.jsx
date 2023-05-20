import { useEffect, useState } from "react"
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import mFetch from "../../utils/mFetch"
import ItemList from "../ItemList/ItemList"
import { Link, useParams } from "react-router-dom"
import './ItemListContainer.css'
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import ItemSpinner from "../Loading/Spinner"


function ItemListContainer({greeting}) {

    const{cid} = useParams();
    
    const[productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)

       useEffect(() =>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'Productos')
      if (!cid) {
        getDocs(queryCollection)
          .then(res =>setProductos(res.docs.map(Productos => ({id: Productos.id, ...Productos.data()}))))
          .catch(error => console.log(error))
          .finally(()=>setloading(false))
        
      }else{
        const queryCollectionFiltered =query(
          queryCollection,
          where('categoria','==', cid)
        )
          getDocs(queryCollectionFiltered)
            .then(res => setProductos(res.docs.map(Productos =>({id: Productos.id, ...Productos.data()}))))
            .catch(error => console.log(error))
            .finally(()=>setloading(false))
      }
     },[cid]) 

     console.log(productos)  
  return (
    loading ? <ItemSpinner/> : <ItemList productos ={productos}/>
  )
}

export default ItemListContainer