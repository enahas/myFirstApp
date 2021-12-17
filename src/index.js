import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

// Import the functions you need from the SDKs you need
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const data = [
  {
    name: "Coaching ontológico: sesión personal",
    price: 5000,
    img: "/assets/img/servicio1.jpg",
    adress: '/category/A',
    item: '/item/Coaching',
    category: 'A',
    descripcion: "En este camino, yo te acompañaré con distintas herramientas y técnicas, siendo la más importante la pregunta, para instarte a reflexionar y que puedas descubrir fortalezas, debilidades y oportunidades encontrando por vos mismo la/s respuesta/s que te permitan transitar de tu situación actual a la situación deseada, aquella en que tu objetivo o meta se encuentra cumplido.",
    stock: 10,
    count: 0,
},
{
    name:"Mentoría de propósito para jóvenes",
    price: 1000,
    img: "/assets/img/servicio3.jpg",
    adress: '/category/A',
    item: '/item/Mentoría',
    category: 'A',
    descripcion: "La Mentoría de Propósito para Jóvenes está compuesta de seis (6) encuentros de dos (2) horas máximo cada uno, con una duración total de un (1) mes.",
    stock: 7,
    count: 0,
},
{
    name:"Sesión de lectura de mapa personal de eneagrama",
    price: 3500,
    img: "/assets/img/servicio4.png",
    adress: '/category/B',
    item: '/item/Eneagrama',
    category: 'B',
    descripcion: "Es un proceso uno a uno en el que como facilitadora en Eneagrama te acompañaré a explorar el símbolo y sus interrelaciones para que descubras por vos mismo tu esencia. Como siempre digo, el autoconocimiento es un camino que transitamos toda vida. Este puede ser tu inicio, el momento donde tomes la punta del ovillo y comiences a desandar.",
    stock: 15,
    count: 0,
},
{
    name:"Workshop de eneagrama",
    price: 1500,
    img: "/assets/img/servicio2.png",
    adress: '/category/B',
    item: '/item/Workshop',
    category: 'B',
    descripcion: "En este curso vas a comenzar a explorar la sabiduría del Eneagrama y todo su potencial como herramienta de autoconocimiento: qué es, cuál es su origen, para que sirve, cómo podes utilizarlo en tu camino de evolución personal y profesional así como también para mejorar tu relación con vos mismo y tu entorno.",
    stock: 5,
    count: 0,
}
]

const db = getFirestore()

const ref = collection(db, 'services')

data.map(service => addDoc(ref, service))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//lo que sigue permite que cuando guardo cambios no se refresque toda la página sino sólo el contenido que modifiqué
if (module.hot) {
  module.hot.accept();
}