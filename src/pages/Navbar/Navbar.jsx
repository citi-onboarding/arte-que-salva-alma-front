 import { useState, useEffect, useRef, Component } from 'react';
// import axios from 'axios';

import { Logo } from '../../assets';
import './Navbar.css';

function Navbar() {
    const navRef = useRef(null);
    
    const [active, setActive] = useState();

    const onToggleClick = (e) => {
        navRef.current.classList.toggle("teste");
      };

return (

    <nav className = "navbarArte"> 
        <div>
            <img className = "Logo" src={Logo} alt="logo arte-que-salva-alma"  />
        </div>
        <ul className = "options">
            <li className="active-tabs" ref={navRef} onClick={onToggleClick} >
                <a className ="op">Início</a>
            </li>
            <li className={`${active ? "teste" : ""}`} onClick={() => setActive(!active)}>
                <a className ="op">Projeto</a>
            </li>
            <li className="">
                <a className ="op">Idelizadora</a>
            </li>
            <li>
                <a className ="op">Conteúdos</a>
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