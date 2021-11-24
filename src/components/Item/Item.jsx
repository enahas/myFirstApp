import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) =>{
    return(
        <div className="container d-md-block">
                    <div className="row align-items-center m-5">
                        <div className="col-lg-4 col-xs-12">
                            <Link to={`/item/${item.id}`}><img src={item.img} className="logoServicios img-fluid" /></Link>
                        </div>
                        <div className="col-lg-8 col-xs-12">
                            <div className="row"><h5>{item.name}</h5></div>
                            <div className="row"><h5>{item.price}</h5></div>
                            <div className="row"><p>{item.descripcion}</p></div>
                            {/* <div className="row">
                                <div className="col-auto pl-0"><button className="btn btn-outline-dark btn-compra">Agregar</button></div>
                            </div> */}
                        </div>
                    </div>
        </div>        
    )
}
export default Item