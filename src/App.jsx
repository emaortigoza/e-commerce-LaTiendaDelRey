import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemLisContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import CartModal from './components/CartModal/CartModal';
import Footer from './components/Footer/Footer';
import ItemBanner from './components/ItemBanner/ItemBanner';
import { CartContextProvider } from './context/CartContext';
import Formulario from './components/Formulario/Formulario';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  

  return (
      <CartContextProvider>
        <div className='contenedor'>
          <Router>

            <NavBar/>
      
            <Routes> 
              <Route path='/' element={<ItemLisContainer/>}/>
              <Route path='/categoria/:cid' element={<ItemLisContainer />}/>
              <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
              <Route path='/cartModal' element={<CartModal/>}/>
              <Route path='/Formulario' element={<Formulario/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>

            <ItemBanner/>
            <Footer/>
          </Router>
        </div>
      </CartContextProvider>
      
    
    
    
  )
}

export default App
