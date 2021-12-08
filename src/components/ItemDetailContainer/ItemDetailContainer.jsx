import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { services } from '../../arrayServices';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [serviciosVenta, setServiciosVenta] = useState()
    const { itemId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    // todo esto adentro de un useEffect cuando quiero traer un solo dato
    useEffect(()=>{
        const myItem = doc(db, 'services', itemId);
        getDoc(myItem)
            .then((snapShot) => {
                if(snapShot.exists()){
                    console.log(snapShot.data())
                }
            })
            .finally(() => {
                setIsLoading(false);
              });
    },[])



    // const traerItem = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(services)
    //         }, 1000)
    //     })
    // }
    // useEffect(() => {
    //     setIsLoading(true);
    //     traerItem()
    //         .then((resp) => {
    //             itemId && setServiciosVenta(resp.find((item) => item.id === itemId));
    //         }).finally(() => {
    //             setIsLoading(false);
    //         })
    // }, [itemId]);
    
    return (isLoading ? <h1>Cargando...</h1> :
        <div>
            <ItemDetail serviciosVenta={serviciosVenta} />
        </div>
    )
}
export default ItemDetailContainer