import './Banner.css';
import React from 'react';
import { imagem } from '../../assets/';

const banner = (props) => {

    return (
        <div className="banner">
                <div class="text-container">
                    <div className="banner-text">
                        <h1>{props.heading}</h1>
                        <p>{props.subheading}</p>
                    </div>
                </div>
                <div className="banner-image">
                    <img src={imagem} alt=""/>
                </div>
            </div>

    );
}
export default banner;