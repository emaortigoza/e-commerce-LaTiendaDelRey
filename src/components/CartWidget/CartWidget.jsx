import { useCartContext } from "../../context/CartContext"

function CartWidget() {
  const {cantidadTotal} = useCartContext()
  return (
    <>
        {cantidadTotal()!= 0 && cantidadTotal()}🛒
    </>
  )
}

export default CartWidget