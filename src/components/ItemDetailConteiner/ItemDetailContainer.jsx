import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
const {pid } = useParams()

console.log(pid)
  return (
    <>
      <ItemDetail/>
    </>
  )
}

export default ItemDetailContainer