
const ItemDetail = (servicio1) =>{
    
    return(
        <div className="container d-md-block">
                    <div className="row align-items-center m-5">
                        <div className="col-lg-4 col-xs-12">
                            <img src={servicio1.img} className="logoServicios img-fluid" />
                        </div>
                        <div className="col-lg-8 col-xs-12">
                            <div className="row"><h5>{servicio1.name}</h5></div>
                            <div className="row"><p>{servicio1.descripcion}</p></div>
                            <div className="row">
                                <div className="col-auto pl-0"><button className="btn btn-outline-dark btn-compra">Agregar</button></div>
                            </div>
                        </div>
                    </div>
        </div>        
    )
}
export default ItemDetail