import React from 'react'
import { useCount } from '../../hook/useCount'
import { Button } from 'react-bootstrap'
import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 20, onAdd}) => {
    const {count, handleSumar, handleRestar} = useCount(initial, 1, stock)

  return (
    <>
    <Button className='button-1' onClick= {handleRestar}>-1</Button>{' '}
    <label>{count}</label>
    <Button className='button-1' onClick={handleSumar}>+1</Button>{' '}
    <Button className='button-add' onClick={()=>{onAdd(count)}}>Agregar al carrito</Button>{' '}
    </>
    
  )
}

export default ItemCount