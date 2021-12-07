import React, { useState } from "react";

const ProductContext=React.createContext()

const CartFuncion = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);
  
    const onAdd = (producto, cantidad) => {
      const itemExiste = cart.find((item) => item.id === producto.id);
      console.log(producto.price)
      if (!itemExiste) {
        setCart([
          ...cart,
          {
            ...producto,
            cantidad: cantidad,
            subtotal: producto.serviciosVenta.price * cantidad,
          },
        ]);
        setTotal(total + producto.serviciosVenta.price * cantidad);
  
        setUnidades(unidades + cantidad);
      } else {
        const cartAux = cart.map((item) => {
          if (item.id === producto.serviciosVenta.id) {
            item.cantidad += cantidad;
            item.subtotal += producto.serviciosVenta.price * cantidad;
          }
          return item;
        });
        setCart(cartAux);
        setTotal(total + producto.serviciosVenta.price * cantidad);
        setUnidades(unidades + cantidad);
      }
    };

    const onRemove = (id) => {
      const myItem = cart.find((item) => item.serviciosVenta.id === id);
      const cartAux = cart.filter((item) => item.serviciosVenta.id !== id);
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