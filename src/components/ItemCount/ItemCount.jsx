import './ItemCount.css';
import { Button, Icon} from 'semantic-ui-react';
import { useState } from 'react';

const ItemCount = ({stock , onAdd, value}) =>{
    const [count, setCount] = useState(0);
    let incrementCounter = () => {
        if(count>=stock) {
            setCount(stock);
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
        <div className="container d-md-block">
            <div className="row align-items-center">
                <h2>{count}</h2>
            </div>
            <div className="row align-items-center ui two buttons">
                <Button basic color='red' onClick={decrementCounter}><Icon name="minus" /></Button>
                <Button basic color='green' onClick={incrementCounter}><Icon name="plus" /></Button>
            </div>
            <div className="row align-items-center">
                <Button onClick={() => onAdd(value)}>Agregar</Button>
            </div>
        </div>
    )
}
export default ItemCount