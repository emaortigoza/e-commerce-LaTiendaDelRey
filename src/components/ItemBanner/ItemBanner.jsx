import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ItemBanner.css'



const ItemBanner = () => {
  return (
    
      <Carousel className='container'>
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="../../assets/banner1.png" />
        </Carousel.Item>
       
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="../../assets/banner6.jpg"/>
        </Carousel.Item>
      </Carousel>

    
  )
}

export default ItemBanner