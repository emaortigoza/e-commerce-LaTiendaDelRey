import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Formulario.css'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Form from './Form'
import { formularioValidacion } from './FomularioValidacion'

const FormularioValidacion = formularioValidacion(Form)

const Formulario = () => {

    //const {cartList, precioTotal} = useCartContext()

    const [dataForm, setDataForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
        emailConfi:''

    })

    

      const handleOnChange = (evt)=>{
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
      

  return <FormularioValidacion dataForm={dataForm} setDataForm={setDataForm} handleOnChange={handleOnChange}/>
}

export default Formulario