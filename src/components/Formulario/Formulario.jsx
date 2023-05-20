import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Formulario.css'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Formulario = () => {
    const {cartList, precioTotal} = useCartContext()
    const [dataForm, setDataForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
        emailConfi:''

    })
    const generarOrden = ()=>{
        const order ={}
        order.buyer = dataForm
        order.items = cartList.map(({nombre, id, precio, cantidad}) =>({id,nombre,precio, cantidad}))
        order.total = precioTotal()
        console.log(order)
  
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')
  
           addDoc(ordersCollection, order)
          .then(res =>console.log(res) )
      }
      
  
  
    const handleOnChange = (evt)=>{
        console.log('nombre del input', evt.target.name)
        console.log('valor del input', evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
    console.log(dataForm)

  return (
    <div className='container-fluid inner'>
        <div className="formulario">
            <h2>Ingrese sus datos para finalizar la compra</h2>
          <form className='campoFormulario' onSubmit={generarOrden} >
            <input type="text" name='nombre'  onChange={handleOnChange} value={dataForm.nombre}  placeholder='Ingrese su nombre' />
            <input type="text" name='telefono'  onChange={handleOnChange} value={dataForm.telefono}  placeholder='Ingrese su telefono' />
            <input type="text" name='email'  onChange={handleOnChange} value={dataForm.email}  placeholder='Ingrese su email' />
            <input type="text" name='emailConfi'  onChange={handleOnChange} value={dataForm.emailConfi}  placeholder='Re-Ingrese su email' /> 
        </form> 
        <div className="boton">
            <button className='btn btn-outline-danger'  onClick={generarOrden} > Generar Orden</button>
            <Link to='../CartModal'><button className='btn btn-outline-danger' > volver atras</button></Link>
        </div>  
        </div>
        
    

    </div>

  )
}

export default Formulario