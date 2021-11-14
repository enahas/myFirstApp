import './ItemCount.css';
import { Card, Button, Icon} from 'semantic-ui-react';
import { Component } from 'react';

class ItemCount extends Component{
    constructor(props) {
        super(props)
        this.state = {counter:0}
    }

    substract = () => {
        this.setState({
          counter: Math.max(0, this.state.counter - 1)
        });
    };

    add(){
        this.setState({ counter: this.state.counter + 1});
    }

    render(){
        return(
            <Card className="card">
                <Card.Content>
                    <Card.Header>PRODUCTO 1</Card.Header>
                    <h2>{this.state.counter}</h2>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='red' onClick={this.substract.bind(this)}><Icon name="minus" /></Button>
                        <Button basic color='green' onClick={this.add.bind(this)}><Icon name="plus" /></Button>
                    </div>
                </Card.Content>
          </Card>        
        )
    }
}
export default ItemCount;