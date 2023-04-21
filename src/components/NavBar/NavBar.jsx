import {Navbar, Container, Nav} from 'react-bootstrap'

import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
            <Container>
                <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-white'/>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#features" className='fs-5 text-white'>Inicio</Nav.Link>
                        <Nav.Link href="#pricing" className='fs-5 text-white'>Camisetas</Nav.Link>
                        <Nav.Link href="#deets" className='fs-5 text-white'>Productos</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className=' fs-5 text-white'>
                            <CartWidget/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
  )
}

export default NavBar