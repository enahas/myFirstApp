import React, { useState } from "react";

const ProductContext=React.createContext()

const CartFuncion = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);
  
    const onAdd = (producto, cantidad) => {
      const itemExiste = cart.find((item) => item.id === producto.id);
      if (!itemExiste) {
        setCart([
          ...cart,
          {
            ...producto,
            cantidad: cantidad,
            subtotal: producto.price * cantidad,
          },
        ]);
        setTotal(total + producto.price * cantidad);
  
        setUnidades(unidades + cantidad);
      } else {
        const cartAux = cart.map((item) => {
          if (item.id === producto.id) {
            item.cantidad += cantidad;
            item.subtotal += producto.price * cantidad;
          }
          return item;
        });
        setCart(cartAux);
        setTotal(total + producto.price * cantidad);
        setUnidades(unidades + cantidad);
      }
    };

    const onRemove = (id) => {
      const myItem = cart.find((item) => item.id === id);
      const cartAux = cart.filter((item) => item.id !== id);
      setCart(cartAux);
      setUnidades(unidades - myItem.cantidad);
      setTotal(total - myItem.subtotal);
    };
  
    return (
      <ProductContext.Provider value={{ cart, unidades, total, onAdd, onRemove }}>
        {children}
      </ProductContext.Provider>
    );
  };

  export { CartFuncion, ProductContext };