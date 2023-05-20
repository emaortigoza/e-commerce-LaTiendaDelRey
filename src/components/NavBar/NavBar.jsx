import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link, NavLink, } from 'react-router-dom'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'


function NavBar() {

  
  return (
    
    
      <Navbar collapseOnSelect expand="lg" className='navbar' sticky="top">
            <Container>
                <Link to='/' className='logo'><Logo/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-white'/>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
                        <NavLink to='/' className={({isActive})=> isActive ? 'menuActivo' : 'menu' }>Inicio</NavLink>
                        <NavLink to='/categoria/camisetas' className={({isActive})=> isActive ? 'menuActivo' : 'menu'}>Camisetas</NavLink>
                        <NavLink to='/categoria/mate' className={({isActive})=> isActive ? 'menuActivo' : 'menu'}>Mate</NavLink>
                        <NavLink to='/categoria/asado' className={({isActive})=> isActive ? 'menuActivo' : 'menu'}>Asado</NavLink>
                        <NavLink to= '/cartModal' className=' menu'>
                            <CartWidget/>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    
  )
}

export default NavBar