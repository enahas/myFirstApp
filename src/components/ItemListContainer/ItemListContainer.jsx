import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import { services } from '../../arrayServices'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greetings}) =>{
    const [items, setItems] = useState([]);
//sólo se ejecuta en el primer renderizado, funciona como el component did mount
//todas las peticiones al back van dentro de un useEffect
    const { catId } = useParams();
    useEffect(() => {      
      const getItems = new Promise((resolve) => {
        setTimeout(() => {resolve(services);}, 2000);
      });
      getItems.then((res) => {
        catId ? setItems(res.filter(item => item.category===catId)) :
        setItems(res);
      });
    }, [catId]);
  
    
    return(
        <div>
          <h1>{greetings}</h1>
          <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer