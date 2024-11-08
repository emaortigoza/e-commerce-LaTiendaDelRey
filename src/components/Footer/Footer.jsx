import { Link } from 'react-router-dom'
import Rey from '../Logo/assets/logonuevo.jpg'
import './Footer.css'


const Footer = () => {
  return (
    <footer className='piePagina'>
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <Link to='/' className='logo'><img src={Rey} alt="" width="200" height="200"/></Link>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laboriosam</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laboriosam</p>
            </div>
            <div className='box'>
                <h2>CONTACTO</h2>
                <div className="redSocial">
                    <a href="" className="fa fa-facebook"></a>
                    <a href="" className=" fa fa-instagram"></a>
                    <a href="" className="fa fa-whatsapp"></a>
                    <a href="" className="fa-sharp fa-solid fa-envelope"></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>eOrtigoza</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
  )
}

export default Footer