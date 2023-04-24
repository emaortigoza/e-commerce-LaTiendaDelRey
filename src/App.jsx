import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemLisContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  return (
    <Router>
      
      <NavBar/>
      <Routes> 
        <Route path='/' element={<ItemLisContainer/>}/>
        <Route path='/categoria/:cid' element={<ItemLisContainer />}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
        

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <ItemCount/>
      
    </Router>
  )
}

export default App
