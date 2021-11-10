// import logo from './logo.svg';
import { Fragment } from 'react';
import './components/Header/Header';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

const App = () =>{
  return(
    <Fragment>
      <Header />
      <ItemListContainer greetings="¡Te doy la bienvenida!"/>
    </Fragment>
  )
}
export default App;
