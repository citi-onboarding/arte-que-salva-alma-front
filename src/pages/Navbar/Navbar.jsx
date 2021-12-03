import { useState, useEffect } from 'react';
import axios from 'axios';

import { Logo } from '../../assets';
import './Navbar.css';

function Navbar() {
    
  return (
    <nav className = "navbarArte"> 
        <div>
            <img className = "Logo" src={Logo} alt="logo arte-que-salva-alma"  />
        </div>
            <ul className = "options">
        <li Class = "active-tabs">
            <a href="Início" className ="op">Início</a>
        </li>
        <li>
            <a href="Projeto" className ="op">Projeto</a>
        </li>
        <li>
            <a href="Idelizadora" className ="op">Idelizadora</a>
        </li>
        <li>
            <a href="Conteudos" className ="op">Conteúdos</a>
        </li>
        <li>
            <a href="#"><button className = "button_Nav">venha colaborar</button></a>
        </li>

        <div className = "div_vazia"></div>

        </ul>    
    </nav>
    );
}

export default Navbar;