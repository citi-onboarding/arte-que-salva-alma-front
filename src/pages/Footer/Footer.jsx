import { useState, useEffect } from "react";
import axios from 'axios';
import './Footer.css';
import{ Logo, Instagram, Youtube, Google, CitiLogo } from '../../assets/index';

function Footer() {
    return (
        <div className='Footer'>
            <div className="logofooter">
                <img src={Logo} alt=""></img>
            </div>

            <div className='CitiBox'>
                <div className='SocialMedia'>
                    <div className='instagram'><a href="https://www.instagram.com/artequesalvaalma/"><img src={Instagram}></img></a></div>
                    <div className='youtube'> <a href="https://www.youtube.com/c/ArtequeSalvaaAlma"><img src={Youtube}></img></a></div>
                    <div className='google'>  <a href="https://www.google.com/"><img src={Google} alt=""></img></a></div>
                </div>
                <div className="mensagem">
                    <p className="copyright" >Made with &nbsp;<b>&lt;/&gt;</b>&nbsp; and &#129293; by &nbsp;<img src={CitiLogo} alt=""></img></p>
                </div>
            </div>
        </div>
    
       );
     }

     export default Footer;