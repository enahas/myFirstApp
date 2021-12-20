// import logo from './logo.svg';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartFuncion } from './components/Context/ProductContext'
import {Cart} from './components/Cart/Cart'
import CartView from './components/CartView/Cartview';

const App = (props) =>{
  
  return(
    <CartFuncion>
        <BrowserRouter> 
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer greetings="¡Te damos la bienvenida!"/>} />
            <Route path='/category/:catId' element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            {/* <Route path='*' element={<Navigate to="/"/>}/> */}
          </Routes>
          <CartView />
        </BrowserRouter>
    </CartFuncion>
  )
}
export default App;
