import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { services } from '../../arrayServices';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [serviciosVenta, setServiciosVenta] = useState()
    const { itemId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const traerItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(services)
            }, 1000)
        })
    }
    useEffect(() => {
        setIsLoading(true);
        traerItem()
            .then((resp) => {
                itemId && setServiciosVenta(resp.find((item) => item.id === itemId));
            }).finally(() => {
                setIsLoading(false);
            })
    }, [itemId]);
    //El filter de un array devuelve un array, el find un elemento


    return (isLoading ? <h1>Cargando...</h1> :
        <div>
            <ItemDetail serviciosVenta={serviciosVenta} />
        </div>
    )
}
export default ItemDetailContainer