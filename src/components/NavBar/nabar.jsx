
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
          <NavLink to='/' className={({isActive})=> isActive ? 'menuActivo' : 'menu' }>Inicio</NavLink>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Link to='/categoria/camisetas' className={({isActive})=> isActive ? 'menuActivo' : 'menu'}>Camisetas</NavDropdown.Link>
              <NavDropdown.Link to='/categoria/mate' className={({isActive})=> isActive ? 'menuActivo' : 'menu'}>Mate</NavDropdown.Link>
              <NavDropdown.Link to='/categoria/asado' className={({isActive})=> isActive ? 'menuActivo' : 'menu'}>Asado</NavDropdown.Link>
              <NavDropdown.Divider />
            </NavDropdown>
            <Link to= '/cartModal' className=' menu'>
                <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>