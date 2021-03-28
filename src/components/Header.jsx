import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <ContendedorHeader>
      <Titulo>Mi blog personal</Titulo>
      <Menu>
        <NavLink to="/" exact={true} >Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca_mi">Acerca de </NavLink>
      </Menu>
    </ContendedorHeader>
  );
}

const ContendedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase; ;
`;

const Menu = styled.nav`
  a{
      text-decoratio: none;
      color:#165168;
      margin: 0 10px;
  }
  a:hover{
      color: #191668;
  }
  a.active{
     border-bottom 2px solid #165168;
     padding-botom: 3px; 
  }
`;

export default Header;
