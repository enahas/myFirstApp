import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () =>{
    const [serviciosVenta,setServiciosVenta] = useState()

    const servicio1 = {
        id:1,
        name: "Coaching ontológico: sesión personal",
        price: 5000,
        img: "/assets/img/servicio1.jpg",
        descripcion: "En este camino, yo te acompañaré con distintas herramientas y técnicas, siendo la más importante la pregunta, para instarte a reflexionar y que puedas descubrir fortalezas, debilidades y oportunidades encontrando por vos mismo la/s respuesta/s que te permitan transitar de tu situación actual a la situación deseada, aquella en que tu objetivo o meta se encuentra cumplido.",
    }
    
    const traerItem = ()=>{
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(servicio1)
            },2000)
        })
    }
    useEffect(() => {      
       traerItem()
       .then((resp)=>setServiciosVenta(resp)) 
      });
  
    
    return(
        <div>
        <ItemDetail serviciosVenta={serviciosVenta} stock={10}/>
    </div>        
    )
}
export default ItemDetailContainer