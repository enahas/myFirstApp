// import logo from './logo.svg';
import { Fragment } from 'react';
// import './components/Header/Header';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../src/screens/Inicio/Inicio'


const App = (props) =>{
  return(
    <Fragment>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/category/:id' element={<ItemListContainer title="Coaching"/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
export default App;
