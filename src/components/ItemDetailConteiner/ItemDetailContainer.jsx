import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import mFetch from "../../utils/mFetch"
import ItemSpinner from "../../Spinner/Spinner"


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
      <section>
       {loading ? <ItemSpinner/>  : <ItemDetail producto={producto}/> } 
      </section>
      
      
    </>
  )
}

export default ItemDetailContainer