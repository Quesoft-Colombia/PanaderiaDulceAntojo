import './css/App.css';
import Index from './components/Index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Productos from './components/productos/Productos'
import Pedidos from './components/pedidos/Pedidos'
import Ventas from './components/ventas/Ventas'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Index></Index>} ></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/pedidos' element={<Pedidos></Pedidos>}></Route>
        <Route path='/ventas' element={<Ventas></Ventas>}></Route>
    
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
