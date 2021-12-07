import { Card } from 'semantic-ui-react';
import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {ProductContext} from '../Context/ProductContext'
import { Link } from 'react-router-dom';
import { Button} from 'semantic-ui-react';


const ItemDetail = ({serviciosVenta}) =>{
    const [purchased, setPurchased] = useState(false);
    const { onAdd } = useContext(ProductContext);
    const addItem = (count) => {
        if (count > 0) {
        onAdd({ serviciosVenta }, count);
        setPurchased(true);
        } else {
        alert('La cantidad debe ser mayor a cero');
        }
    };

    return(
        <div className="container d-md-block mb-5">
            <Card>
                <Card.Content>
                    <Card.Header>{serviciosVenta?.name}</Card.Header>
                    <img src={serviciosVenta?.img} className="logoServicios img-fluid" />
                    <p>{serviciosVenta?.descripcion}</p>
                    <p>{serviciosVenta?.price}</p>
                    <p>Stock disponible: {serviciosVenta?.stock}</p>
                    {!purchased ? (<ItemCount stock={serviciosVenta?.stock} initial={1} addItem={addItem} />) 
                    : (<Button><Link to="/cart">Terminar compra</Link></Button>)}
                </Card.Content>
            </Card>
        </div>
    )
}
export default ItemDetail