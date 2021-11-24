import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { services } from '../../arrayServices';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{
    const [serviciosVenta,setServiciosVenta] = useState()
    const { itemId } = useParams();

    const traerItem = ()=>{
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(services)
            },2000)
        })
    }
    useEffect(() => {      
       traerItem()
       .then((resp)=>{
        itemId && setServiciosVenta(resp.find((item) => item.id === itemId));
       })    
      }, [itemId]);
  
    
    return(
        <div>
        <ItemDetail serviciosVenta={serviciosVenta} stock={10}/>
    </div>        
    )
}
export default ItemDetailContainer