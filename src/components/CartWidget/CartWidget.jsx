import './CartWidget.css'
import carrito from './carrito.png'
import { useContext } from 'react'
import {ProductContext} from '../Context/ProductContext'
import { Link } from 'react-router-dom';

const CartWidget = () =>{

    const { unidades } = useContext(ProductContext);

    return(
        unidades > 0 && (
            <Link to="/cart" className="linksCarrito">
                    <img src={carrito} alt="logoCarrito" className="logoCarrito"/>
                    <p>{unidades}</p>
            </Link>
          )
    )
}
export default CartWidget