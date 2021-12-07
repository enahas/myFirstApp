import React, { useContext } from 'react';
import {ProductContext} from '../Context/ProductContext'
import { Link } from 'react-router-dom';
import { Button} from 'semantic-ui-react';

export const Cart = () => {
    const { cart, unidades, total, onRemove } = useContext(ProductContext);
    
    return unidades > 0 ? (
      <>
        <h1>ITEMS</h1>
        {cart.map((item) => {
          return (
            <article key={item.serviciosVenta.id}>
              <h2>{item.serviciosVenta.name}</h2>
              <img src={item.serviciosVenta.img} alt={item.serviciosVenta.name} height="50px" />
              <p>Precio individual: ${item.serviciosVenta.price}</p>
              <p>Cantidad: {item.cantidad} items</p>
              <p>Subtotal: ${item.serviciosVenta.subtotal}</p>
              <Button onClick={() => onRemove(item.serviciosVenta.id)}>ELIMINAR ITEM</Button>
            </article>
          );
        })}
        <h1>TOTAL: ${total}</h1>
      </>
    ) : (
      <>
        <h1>NO HAY ITEMS EN TU CARRITO</h1>
        <Button><Link to="/">IR A COMPRAR</Link></Button>
      </>
    );
  };