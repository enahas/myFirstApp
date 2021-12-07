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
            console.log(item)
          return (
            <article key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.img} alt={item.name} height="50px" />
              <p>Precio individual: ${item.price}</p>
              <p>Cantidad: {item.cantidad} items</p>
              <p>Subtotal: ${item.subtotal}</p>
              <Button onClick={() => onRemove(item.id)}>ELIMINAR ITEM</Button>
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