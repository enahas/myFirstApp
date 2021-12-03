import { Card } from 'semantic-ui-react';
import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext'
import { Button } from 'semantic-ui-react';


const ItemDetail = ({serviciosVenta}) =>{
    const [estado, setEstado] = useState(false);
    const soyElContexto = useContext(CartContext);
    const onAdd = (value) => {
        console.log("Se compraron", value , "Items")
        setEstado(true)
        // guardarServicios(serviciosVenta, value)
        soyElContexto.guardarServicios(serviciosVenta, value)
    }
    
    console.log(soyElContexto)
    return(
        <div className="container d-md-block mb-5">
            <Card>
                <Card.Content>
                    <Card.Header>{serviciosVenta?.name}</Card.Header>
                    <p>{serviciosVenta?.descripcion}</p>
                    <p>{serviciosVenta?.price}</p>
                    <img src={serviciosVenta?.img} className="logoServicios img-fluid" />
                    {estado ? <Button>Terminar compra</Button> : <ItemCount stock={10} onAdd={onAdd}/>}
                </Card.Content>
            </Card>
        </div>
    )
}
export default ItemDetail