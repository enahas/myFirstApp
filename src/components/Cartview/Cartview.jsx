import React, { useContext, useState } from "react"
import {ProductContext} from "../Context/ProductContext"
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const CartView = () => {
    const { cart, onRemove, total, clearCart } = useContext(ProductContext)
    const [formData, setFormData] = useState({
        nombre: "",
        mail: "",
        confirmarMail: "",
        telefono: "",
    })
    const updateFormData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const finalizarCompra = e => {
        e.preventDefault();

        if (formData.nombre.trim() !== ""
            && formData.mail.trim() !== ""
            && formData.confirmarMail.trim() !== ""
            && formData.telefono.trim() !== ""
            && formData.mail === formData.confirmarMail) {
            
            const ref = collection(db, "ordenes");

            const myData = { comprador: { ...formData }, cart, total: total }

            addDoc(ref, myData).then(res => {
                alert(`Tu numero de compra es ${res.id}`)
                clearCart();
            })
        }

        else {
            alert("Los datos no son correctos, ¡por favor revisarlos!")
        }

    }

    return <>
        {total > 0 ?
            <>
                {cart.map(item => {
                    return <span key={item.serviciosVenta.id}>
                        <h1>{item.serviciosVenta.name}</h1>
                        <h2>Precio individual : ${item.serviciosVenta.price}</h2>
                        <h2>Cantidad: {item.cantidad}</h2>
                        <h2>SubTotal:{item.cantidad * item.serviciosVenta.price} </h2>
                        <img src={item.serviciosVenta.img} alt={item.serviciosVenta.name} style={{ height: "50px", width: "50px" }} />
                        <button onClick={() => onRemove(item.serviciosVenta.id)}>Eliminar producto</button>
                    </span>
                })}
                <h2>TOTAL: {total}</h2>

                <form onSubmit={e => finalizarCompra(e)}>
                    <label>Nombre y apellido</label>
                    <input type="text" value={formData.nombre} name="nombre" onChange={(e) => updateFormData(e)} required />
                    <label>e-mail</label>
                    <input type="mail" value={formData.mail} name="mail" onChange={(e) => updateFormData(e)} required />
                    <label>Confirmar e-mail</label>
                    <input type="mail" value={formData.confirmarMail} name="confirmarMail" onChange={(e) => updateFormData(e)} required />
                    <label>Telefono</label>
                    <input type="text" value={formData.telefono} name="telefono" onChange={(e) => updateFormData(e)} required />
                    <input type="submit" value="Comprar" />
                </form>
            </>

            :
            <h1>Todavia no tenes items en el carrito</h1>
        }
    </>
}

export default CartView