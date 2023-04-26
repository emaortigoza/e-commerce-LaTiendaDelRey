import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ItemBanner.css'



const ItemBanner = () => {
  return (
    
      <Carousel className='container'>
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="/public/banner-ecomerce/banner1.png" />
        </Carousel.Item>
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="/public/banner-ecomerce/banner5.jpg"/>
        </Carousel.Item>
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="/public/banner-ecomerce/banner6.jpg"/>
        </Carousel.Item>
      </Carousel>

    
  )
}

export default ItemBanner