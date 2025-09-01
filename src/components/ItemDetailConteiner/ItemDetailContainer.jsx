import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import mFetch from "../../utils/mFetch"
import ItemSpinner from "../Loading/Spinner"
import ItemBanner from "../ItemBanner/ItemBanner"



const ItemDetailContainer = () => {
  const[producto,setProducto] = useState({})
  const[loading, setLoading] = useState(true)
  const {pid } = useParams()


  useEffect(()=>{
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'Productos', pid)
    
    getDoc(queryDoc)
        .then(respuesta =>setProducto({id: respuesta.id, ...respuesta.data() }))
        .catch(faild => console.log(faild))
        .finally(() => setLoading(false))
  },[])

  console.log(producto)
  return (
    <>
      
      <section>
       {loading ? <ItemSpinner/>  : <ItemDetail producto={producto}/> } 
      </section>
      
    </>
    
  )
}

export default ItemDetailContainer