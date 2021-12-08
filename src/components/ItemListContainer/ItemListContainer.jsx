import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import { services } from '../../arrayServices'
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({greetings}) =>{
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
//sólo se ejecuta en el primer renderizado, funciona como el component did mount
//todas las peticiones al back van dentro de un useEffect
    const { catId } = useParams();
    useEffect(()=>{
      const ref = collection(db, 'services');
      getDocs(ref)
          .then((snapShot) => {
              snapShot.docs.map((doc) => console.log(doc.data()))
          })
          .finally(() => {
            setLoader(false);
          })
    },[catId])
    // useEffect(() => {      
    //   setLoader(true);
    //   const getItems = new Promise((resolve) => {
    //     setTimeout(() => {resolve(services);}, 1000);
    //   });
    //   getItems.then((res) => {
    //     catId ? setItems(res.filter(item => item.category===catId)) :
    //     setItems(res);
    //   }).finally(()=>{
    //     setLoader(false);
    //   })
      
    //   ;
    // }, [catId]);
  
    
    return(loader ? <h1>Cargando...</h1> :
        <div>
          <h1>{greetings}</h1>
          <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer