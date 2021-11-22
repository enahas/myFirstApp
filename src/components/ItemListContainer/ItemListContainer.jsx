import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import { services } from '../../arrayServices'

const ItemListContainer = (props) =>{
    const [items, setItems] = useState([]);
//sólo se ejecuta en el primer renderizado, funciona como el component did mount
//todas las peticiones al back van dentro de un useEffect
    useEffect(() => {      
      const getItems = new Promise((resolve) => {
        setTimeout(() => {resolve(services);}, 2000);
      });
      getItems.then((res) => {
        setItems(res);
      });
    }, []);
  
    
    return(
        <div>
            <h1>{props.greetings}</h1>
            <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer