import React, { useState } from "react";
import { useEffect } from "react";
import { getDocs, collection, getFirestore, addDoc } from 'firebase/firestore';

const ProductContext=React.createContext()

const CartFuncion = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const db = getFirestore()
    const ref = collection(db, 'services')
    const refCart = collection(db, 'cartItems')
    const [countUnidades, setCountUnidades] = useState([])

    useEffect(() => {
      
      getDocs(ref)
      .then((snapShot) => {
        setCountUnidades(snapShot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        // snapShot.docs.map((service) => setUnidades(prev=>([...prev, service.data()])))
        setIsLoading(false)
      })

    }, [])

    useEffect(() => {
      // console.log(JSON.stringify(unidades))
      getDocs(refCart)
      .then((snapShot) => {
        // console.log(snapShot)
        setCart(snapShot.docs.map((doc) => ({...doc.data()})))
        countUnidades.forEach((item)=>{
          setUnidades(unidades+item.count)
        })

        // console.log(unidades)
        setIsLoading(false)
      })
    }, [unidades])


    const onAdd = (producto, cantidad) => {
      // cart.forEach((item)=> {
      //   console.log(item)
      // })
      const itemExiste = cart.find((item) => item.id === producto.serviciosVenta.id);
      // console.log(producto.serviciosVenta.id)
      if (!itemExiste) {
        addDoc(refCart, producto.serviciosVenta)
        // setCart([
        //   ...cart,
        //   {
        //     ...producto,
        //     cantidad: cantidad,
        //     subtotal: producto.serviciosVenta.price * cantidad,
        //   },
        // ]);
        // setTotal(total + producto.serviciosVenta.price * cantidad);
  
        // setUnidades(unidades + cantidad);
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