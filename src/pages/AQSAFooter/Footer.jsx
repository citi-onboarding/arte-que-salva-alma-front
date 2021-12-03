import { useState, useEffect } from "react";
import axios from 'axios';

import './Footer.css';
import{ Logo, Instagram, Youtube, Google, Vetor, Coracao, CitiLogo } from '../../assets/index';

function Footer() {
    return (
        <div className='Footer'>
            <div className="logo">
                <img src={Logo}></img>
            </div>

        <div className='CitiBox'>
            <div className='SocialMedia'>
                <div className='instagram'> <a href="https://www.instagram.com/artequesalvaalma/"><img src={Instagram}></img></a>
                <div className='youtube'> <a href="https://www.youtube.com/c/ArtequeSalvaaAlma"><img src={Youtube}></img></a>
                <div className='google'>  <a href="https://www.google.com/"><img src={Google}></img></a>
                </div>
                </div>
                </div>
            </div>

            <div className ="mensagemCiti">
                <div className="mensagem">
                    <p className="copyright" >Made with <b>&lt;/&gt;</b> and &#129293; by</p>
                </div>
                <div className="citizinho">
                    <img src={CitiLogo}></img> 
                </div>
            </div>
        </div>
        </div>
       );
     }
     
     export default Footer;