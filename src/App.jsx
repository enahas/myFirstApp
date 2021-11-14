// import logo from './logo.svg';
import { Fragment } from 'react';
// import './components/Header/Header';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


const App = () =>{
  return(
    <Fragment>
      <Header />
      <ItemListContainer greetings="¡Te doy la bienvenida!"/>
      <ItemCount />
    </Fragment>
  )
}
export default App;
