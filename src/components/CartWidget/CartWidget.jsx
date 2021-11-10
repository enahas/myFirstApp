import './CartWidget.css'
import carrito from './carrito.jpg'

const CartWidget = () =>{
    return(
            <img src={carrito} alt="logoCarrito" className="logoCarrito"/>
    )
}
export default CartWidget