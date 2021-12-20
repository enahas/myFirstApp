import React, { useContext, useState } from 'react'
import {ProductContext} from '../Context/ProductContext'
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const CartView = () => {
    const { cart, removeItem, getPriceTotal, clearCart } = useContext(ProductContext)
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
            const ref = collection(db, "ordenes")
            const myData = { comprador: { ...formData }, cart, total: getPriceTotal() }
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
        {getPriceTotal() > 0 ?
            <>
                {cart.map(i => {
                    return <span key={i.item.id}>
                        <h1>{i.item.product1}</h1>
                        <h2>Precio indivudual : ${i.item.precio}</h2>
                        <h2>Cantidad: {i.cantidad}</h2>
                        <h2>SubTotal:{i.cantidad * i.item.precio} </h2>
                        <img src={i.item.imagen} alt={i.item.product1} style={{ height: "50px", width: "50px" }} />
                        <button onClick={() => removeItem(i.item.id)}>Eliminar producto</button>
                    </span>
                })}
                <h2>TOTAL: {getPriceTotal()}</h2>
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