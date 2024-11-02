import { useState } from "react"
import { Alert } from "react-bootstrap"

export const fomularioValidacion = (WrappedComponent) => {
    
    const FormularioValidacion = (props) =>{
        const [errors, setErrors]= useState({})
        const validateForm = () =>{
           
        let newErrors = {}
        let isValid = true

        if (!props.dataForm.nombre) {
            newErrors.nombre = <Alert>'Por favor ingresa tu nombre'</Alert>
            isValid = false
        }
        if (!props.dataForm.telefono) {
            newErrors.telefono = <Alert>'Escribi un numero de contacto'</Alert>
            isValid= false
        }
        if (!props.dataForm.email) {
            newErrors.email =<Alert>'Ingresa tu email de contacto'</Alert> 
            isValid= false
        }
        if (props.dataForm.emailConfi !== props.dataForm.email ) {
            newErrors.emailConfi =<Alert>'El email no coincide, vuelva a escribirlo'</Alert> 
            isValid= false
        }

        setErrors(newErrors)
        return isValid
        }
        

        return <WrappedComponent
            {...props}
            errors = {errors}
            validateForm={validateForm}        
        />
    }

    return fomularioValidacion
}