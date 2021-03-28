import React,{useState} from "react";
//creamos contexto global
const ContextoTema = React.createContext()

function ProvedorTema({children}) {
    const [tema, setTema] = useState({
        alineado: "left",
        fuente: 30,
    })

    const aumentarFuente =()=>{
        setTema({...tema, fuente: tema.fuente + 1}) 
    }
    const disminuirFuente =()=>{
        setTema({...tema, fuente: tema.fuente - 1}) 
    }

    const alinearIzquierda =()=>{
        setTema({...tema, alineado: "left"}) 
    }
    const alinearDerecha =()=>{
        setTema({...tema, alineado: "right"}) 
    }
    const alinearCentro =()=>{
        setTema({...tema, alineado: "center"}) 
    }
     
    return (
        <ContextoTema.Provider value={{tema, aumentarFuente,disminuirFuente, alinearIzquierda,alinearDerecha,alinearCentro}}>
           {children}
        </ContextoTema.Provider>
    )
}

export {ProvedorTema, ContextoTema}
