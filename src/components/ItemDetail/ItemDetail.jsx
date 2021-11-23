import { Card, Button, Icon} from 'semantic-ui-react';
import { useState } from 'react';
import './ItemDetail.css';

const ItemDetail = ({serviciosVenta}, props) =>{
    const [count, setCount] = useState(0);
    let incrementCounter = () => {
        if(count>=props.stock) {
            setCount(props.stock);
        } else {
            setCount(count + 1);
        }
    }
    let decrementCounter = () => {
        if(count<=0){
            setCount(0);
        } else{
            setCount(count - 1);
        }        
    }
    return(
        <div className="card">
            <Card>
                <Card.Content>
                    <Card.Header>{serviciosVenta?.name}</Card.Header>
                    <p>{serviciosVenta?.descripcion}</p>
                    <h2>{count}</h2>
                    <img src={serviciosVenta?.img} className="logoServicios img-fluid" />
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='red' onClick={decrementCounter}><Icon name="minus" /></Button>
                        <Button basic color='green' onClick={incrementCounter}><Icon name="plus" /></Button>
                    </div>
                </Card.Content>
            </Card> 
        </div>
      
    )
}
export default ItemDetail