import { Card } from 'semantic-ui-react';
import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({serviciosVenta}) =>{
    const [estado, setEstado] = useState(0);
    const onAdd = (estado) => {
        estado = 'Agregado';
        console.log(estado)
        setEstado(true)
        
    }
    return(
        <div className="container d-md-block mb-5">
            <Card>
                <Card.Content>
                    <Card.Header>{serviciosVenta?.name}</Card.Header>
                    <p>{serviciosVenta?.descripcion}</p>
                    <p>{serviciosVenta?.price}</p>
                    <img src={serviciosVenta?.img} className="logoServicios img-fluid" />
                    <ItemCount stock={10} onAdd={onAdd}/>
                </Card.Content>
            </Card>
        </div>
    )
}
export default ItemDetail