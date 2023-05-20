import React from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const Form = ({dataForm,setDataForm,handleOnChange, errors, validateForm}) => {

    const {cartList, precioTotal,vaciarCarrito} = useCartContext()

    const generarOrden = (evt)=>{
        evt.preventDefault()
        if (validateForm()) {
            const order ={}
            order.buyer = dataForm
            order.items = cartList.map(({nombre, id, precio, cantidad}) =>({id,nombre,precio, cantidad}))
            order.total = precioTotal()
            
            const dbFirestore = getFirestore()
            const ordersCollection = collection(dbFirestore, 'orders')
    
            addDoc(ordersCollection, order)
            .then (({id}) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Muchas Gracias',
                  text: `Tu pedido id: ${id} está en preparación`,
                  confirmButtonColor: '#d5161e',
                  background: '#d5161e',
                  color: 'white'
                })
              })
              .catch(error => console.log(error))
              .finally(() => {
                setDataForm({nombre: '', telefono: '', email: '', emailConfi: ''})
                  
                setTimeout(()=>{
                    vaciarCarrito()
                  window.location.href = "/"
                },4000)
              })
        }        
      }
  return (
    <div className='container-fluid inner'>
        <div className="formulario">
            <h2>Ingrese sus datos para finalizar la compra</h2>
            <br />
          <form className='campoFormulario' onSubmit={generarOrden} >
            <input type="text" name='nombre'  onChange={handleOnChange} value={dataForm.nombre}  placeholder='Ingrese su nombre' />
            <br />
            {errors && errors.nombre && <span>{errors.nombre}</span>}
            <input type="text" name='telefono'  onChange={handleOnChange} value={dataForm.telefono}  placeholder='Ingrese su telefono' />
            <br />
            {errors && errors.telefono && <span>{errors.telefono}</span>}
            <input type="text" name='email'  onChange={handleOnChange} value={dataForm.email}  placeholder='Ingrese su email' />
            <br />
            {errors && errors.email && <span>{errors.email}</span>}
            <input type="text" name='emailConfi'  onChange={handleOnChange} value={dataForm.emailConfi}  placeholder='Re-Ingrese su email' />
            <br />
            {errors && errors.emailConfi && <span>{errors.emailConfi}</span>}
        </form> 
        <div className="boton">
            <button className='btn btn-outline-danger'  onClick={generarOrden} > Generar Orden</button>
            <Link to='../CartModal'><button className='btn btn-outline-danger' > volver atras</button></Link>
        </div>  
        </div>
        
    

    </div>
  )
}

export default Form