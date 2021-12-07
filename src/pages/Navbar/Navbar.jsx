 import { useState, useEffect, useRef, Component } from 'react';
// import axios from 'axios';

import { Logo } from '../../assets';
import './Navbar.css';

function Navbar() {
    
    const [active, setActive] = useState(1);

    const toggleTab = (index) =>{
        setActive(index);
    }
    
return (

    <nav className = "navbarArte"> 
        <div>
            <img className = "Logo" src={Logo} alt="logo arte-que-salva-alma"  />
        </div>
        <ul className = "options">
            <li className ={active === 1? "barrinha" :""} onClick = {()=>toggleTab(1)}>
                <a href="#Início" className ="op">Início</a>
            </li>
            <li className ={active === 2? "barrinha":""} onClick = {()=>toggleTab(2)}>
                <a href="#Projeto" className ="op">Projeto</a>
            </li>
            <li className ={active === 3? "barrinha":""} onClick = {()=>toggleTab(3)}>
                <a href="#Idealizadora" className ="op">Idelizadora</a>
            </li>
            <li className ={active === 4? "barrinha":""} onClick = {()=>toggleTab(4)}>
                <a href="#Conteúdos" className ="op">Conteúdos</a>
            </li>
            <li>
                <a ><button className = "button_Nav">venha colaborar</button></a>
            </li>

            <div className = "div_vazia"></div>
        </ul>    
    </nav>
    );
}

export default Navbar;