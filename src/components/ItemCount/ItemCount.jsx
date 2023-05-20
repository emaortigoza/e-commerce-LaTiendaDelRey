import React from 'react'
import { useCount } from '../../hook/useCount'
import { Button } from 'react-bootstrap'

const ItemCount = ({initial = 1, stock = 20, onAdd}) => {
    const {count, handleSumar, handleRestar} = useCount(initial, 1, stock)

  return (
    <>
    <Button onClick= {handleRestar} variant="outline-danger">-1</Button>{' '}
    <label>{count}</label>
    <Button onClick={handleSumar} variant="outline-danger">+1</Button>{' '}
    <Button onClick={()=>{onAdd(count)}} variant="outline-danger">Agregar al carrito</Button>{' '}
    </>
    
  )
}

export default ItemCount