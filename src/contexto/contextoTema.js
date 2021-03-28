import React,{useState} from "react";

const ContextoTema = React.createContext()

function ProvedorTema({children}) {
    const [tema, setTema] = useState({
        alineado: "left",
        fuente: 20
    })
    return (
        <ContextoTema.Provider value={{tema}}>
           {children}
        </ContextoTema.Provider>
    )
}

export {ProvedorTema, ContextoTema}
