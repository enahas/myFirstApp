// import React, { useState } from "react";

// const CartContext=React.createContext()

// export function UserContext({children}){
//     const[serviciosGuardados, setServiciosGuardados] = useState([])
    
//     const guardarServicios = (serviciosVenta, value) => {
//         const found = serviciosGuardados.find(element => 
//             element.Nombre === serviciosVenta.name
//         );
        
//         if (!found){
//             setServiciosGuardados([...serviciosGuardados,{'Nombre':serviciosVenta.name, 'Precio':serviciosVenta.price, 'Img':serviciosVenta.img, 'Id':serviciosVenta.id, 'Adress':serviciosVenta.adress,'Item':serviciosVenta.item, 'Category':serviciosVenta.category, 'Cantidad':value}])
//         }
//         else{
//             const indexFound = serviciosGuardados.indexOf(found);
//             serviciosGuardados[indexFound].Cantidad = serviciosGuardados[indexFound].Cantidad + value;
//             setServiciosGuardados([...serviciosGuardados])
//         }
//     };
    
//     return(
//         <CartContext.Provider value={{ serviciosGuardados, guardarServicios }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export default CartContext