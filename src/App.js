import React,{useContext} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AcercaDe from './components/AcercaDe';
import Blog from './components/Blog';
import Header from './components/Header';
import Inicio from './components/Inicio';
import styled from 'styled-components';
import Post from './components/Post';
import Error from './components/Error';
import { ContextoTema } from "./contexto/contextoTema";

function App() {
  const {tema} = useContext(ContextoTema)
  
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main tema={tema}>
          <Switch>
            <Route path='/' exact={true} component={Inicio}/>
            <Route path='/blog'component={Blog}/>
            <Route path='/post/:id'component={Post}/>
            <Route path='/acerca_mi' component={AcercaDe}/>
            <Route component={Error}/>
          </Switch>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>


  );
}

const ContenedorPrincipal = styled.div`
    padding: 40px;
    width:90%;
    max-width:700px;
`;
const Main = styled.main`
    font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
    text-align: ${props=>props.tema ? props.tema.alineado : "right"};
    background: #fff;
    padding: 40px;
    border-radius:10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
export default App;
