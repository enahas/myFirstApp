import React, { useEffect, useState } from "react";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from '../ItemCount/ItemCount'

const Context=React.createContext()

export function UserContext({children}){
    const[serviciosGuardados, setServiciosGuardados] = useState()

    useEffect(()=>{
        guardarServicios()
    }, [])

    const guardarServicios = ({serviciosVenta, value}) => {
        addItem(serviciosVenta?.name, value)
    }

    return(
        <Context.Provider value={{ serviciosGuardados, guardarServicios }}>
            {children}
        </Context.Provider>
    )
}

export default Context