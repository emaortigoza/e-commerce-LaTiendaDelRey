import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import mFetch from "../../utils/mFetch"


const ItemDetailContainer = () => {
  const[producto,setProducto] = useState({})
  const[loading, setLoading] = useState(true)
  const {pid } = useParams()
useEffect(()=>{
  mFetch(pid)
  .then(respuesta => setProducto(respuesta))
  .catch(faild => console.log(faild))
  .finally(() => setLoading(false))
},[])

console.log(pid)
  return (
    <>
      {loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto}/> }
      
    </>
  )
}

export default ItemDetailContainer