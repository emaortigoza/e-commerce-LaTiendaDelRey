import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ItemBanner.css'



const ItemBanner = () => {
  return (
    
      <Carousel className='container'>
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="/e-commerce-LaTiendaDelRey/public/banner-ecomerce/banner2.jpg" />
        </Carousel.Item>
       
        <Carousel.Item className='contenedorImg'>
          <img className="d-block w-100" src="/e-commerce-LaTiendaDelRey/public/banner-ecomerce/banner5.jpg"/>
        </Carousel.Item>
      </Carousel>

    
  )
}

export default ItemBanner