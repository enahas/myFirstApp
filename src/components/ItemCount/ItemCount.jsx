import { Button, Icon} from 'semantic-ui-react';
import { useState } from 'react';

const ItemCount = ({stock , addItem, initial}) =>{
    const [count, setCount] = useState(initial);
    let incrementCounter = () => {
        if(count>=stock) {
            setCount(stock);
        } else {
            setCount(count + 1);
        }
    }
    let decrementCounter = () => {
        if(count<=initial){
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
                <Button basic color='red' onClick={decrementCounter} disabled={initial >= count}><Icon name="minus" /></Button>
                <Button basic color='green' onClick={incrementCounter} disabled={stock <= count}><Icon name="plus" /></Button>
            </div>
            <div className="row align-items-center">
                <Button onClick={() => addItem(count)}>Agregar</Button>
            </div>
        </div>
    )
}
export default ItemCount
