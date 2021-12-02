// import logo from './logo.svg';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {UserContext} from './components/CartContext/CartContext'

const App = (props) =>{
  
  return(
    <Fragment>
      <UserContext>
        <BrowserRouter> 
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer greetings="¡Te damos la bienvenida!"/>} />
            <Route path='/category/:catId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            {/* <Route path='*' element={<Navigate to="/"/>}/> */}
          </Routes>
        </BrowserRouter>
      </UserContext>
    </Fragment>
  )
}
export default App;
