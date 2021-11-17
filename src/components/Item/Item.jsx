import servicio1 from './servicio1.jpg'
import { Card, Button, Icon} from 'semantic-ui-react';
import { useState } from 'react';

const services = [
    {
        id:1,
        name: "Coaching ontológico: sesión personal",
        price: 5000,
        img: "../assets/img/servicio1.jpg",
        descripcion: "En este camino, yo te acompañaré con distintas herramientas y técnicas, siendo la más importante la pregunta, para instarte a reflexionar y que puedas descubrir fortalezas, debilidades y oportunidades encontrando por vos mismo la/s respuesta/s que te permitan transitar de tu situación actual a la situación deseada, aquella en que tu objetivo o meta se encuentra cumplido."
    },
    {
        id:2, 
        name:"Mentoría de propósito para jóvenes",
        price: 1000,
        img: "../assets/img/servicio3.jpg",
        descripcion: "La Mentoría de Propósito para Jóvenes está compuesta de seis (6) encuentros de dos (2) horas máximo cada uno, con una duración total de un (1) mes."
    },
    {
        id:3,
        name:"Sesión de lectura de mapa personal de eneagrama",
        price: 3500,
        img: "../assets/img/servicio4.png",
        descripcion: "Es un proceso uno a uno en el que como facilitadora en Eneagrama te acompañaré a explorar el símbolo y sus interrelaciones para que descubras por vos mismo tu esencia. Como siempre digo, el autoconocimiento es un camino que transitamos toda vida. Este puede ser tu inicio, el momento donde tomes la punta del ovillo y comiences a desandar."
    },
    {
        id:4,
        name:"Workshop de eneagrama",
        price: 1500,
        img: "../assets/img/servicio2.png",
        descripcion: "En este curso vas a comenzar a explorar la sabiduría del Eneagrama y todo su potencial como herramienta de autoconocimiento: qué es, cuál es su origen, para que sirve, cómo podes utilizarlo en tu camino de evolución personal y profesional así como también para mejorar tu relación con vos mismo y tu entorno."
    }
]


const Item = (props) =>{
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

    const somethingWillHappen = () => {
        return new Promise ((resolve, reject) => {
            if (true){
                setTimeout(() => {resolve(services)},2000)
            }else{reject('mal!')}
        })
    }
    
    somethingWillHappen ()
      .then ((response)=> console.log(response))
      .catch ((error)=> console.log(error))

    return(
        <Card className="card">
        <Card.Content>
            <Card.Header>{services.name}</Card.Header>
            <h2>{services.descripcion}</h2>
            <h2>{count}</h2>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='red' onClick={decrementCounter}><Icon name="minus" /></Button>
                <Button basic color='green' onClick={incrementCounter}><Icon name="plus" /></Button>
            </div>
        </Card.Content>
        </Card>
        // <div className="container d-md-block">
        //             <div className="row align-items-center m-5">
        //                 <div className="col-lg-4 col-xs-12">
        //                     <img src={services.img} className="logoServicios img-fluid" />
        //                 </div>
        //                 <div className="col-lg-8 col-xs-12">
        //                     <div className="row"><h5>{services.name}</h5></div>
        //                     <div className="row"><p>{services.descripcion}</p></div>
        //                     <div className="row">
        //                         <div className="col-auto pl-0"><button className="btn btn-outline-dark btn-compra">Agregar</button></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>        
    )
}
export default Item