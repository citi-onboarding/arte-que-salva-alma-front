import React from "react";
import './Image.css';

const Image = (props) => {


    return (
        <div className="container-image">
            <img src={props.src} alt=""/>
        </div>

    );
}

export default Image;