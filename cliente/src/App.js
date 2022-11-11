import './css/App.css';
import Index from './components/Index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import IndexProductos from './components/productos';
import CreateProductos from './components/productos/createProductos';
import ActualizarProductos from './components/productos/actualizarProductos';
import EliminarProductos from './components/productos/eliminarProductos';
import Pedidos from './components/pedidos/Pedidos'
import Ventas from './components/ventas/Ventas'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Index></Index>} ></Route>
        <Route path="/productos">
                    <Route
                        path="/productos"
                        element={<IndexProductos></IndexProductos>}
                    ></Route>
                    <Route
                        path="/productos/create"
                        element={<CreateProductos></CreateProductos>}
                    ></Route>
                    <Route path="/productos/delete">
                        <Route
                            path=":idProductos"
                            element={<EliminarProductos></EliminarProductos>}
                        ></Route>
                    </Route>
                    <Route path="/productos/update">
                        <Route
                            path=":idProductos"
                            element={
                                <ActualizarProductos></ActualizarProductos>
                            }
                        ></Route>
                    </Route>
                </Route>
        <Route path='/pedidos' element={<Pedidos></Pedidos>}></Route>
        <Route path='/ventas' element={<Ventas></Ventas>}></Route>
    
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
