import { useState, useEffect } from 'react';
import axios from 'axios';

import './Colaboracao.css';

function Colaboracao() {
    const [collaboration, setCollaboration] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/collaboration')
            .then(res =>{
                setCollaboration(res.data);
                console.log(res.data);
            })
            .catch(err => console.log('Erro: ', err));
    },[]);
  
    console.log(collaboration);

    return (
        <div className = "secaoInformacoes">
            <img className = "img2" src= "https://res.cloudinary.com/dnzinxclg/image/upload/v1638128144/large_logo_temporaria_9f684f9c91.jpg" alt="logo" />
            <div className = "colabore_fora">
                <h1 className = "nomeCOLABORE">{collaboration.Text?.Title}</h1>
            
                <div className = "colabore_dentro">
                        <div className = "textao">
                            <h1 className = "NameDoacao">{collaboration.Text?.LittleTitle}</h1>
                            <p className = "textoDoacao">{collaboration.Text?.Text}</p>
                        </div>
                    <div className = "div-vazia"></div>
                        <div className = "contato">
                            <h1 className = "Pix">{collaboration.Text?.NamePix}</h1>
                            <p className = "telefone">{collaboration.Text?.Pix}</p>
                            <p className = "nada"></p>
                            <p className = "nome">{collaboration.Text?.PersonName}</p>   
                        </div>
                    </div>
                </div>
            <img className = "img1" src= "https://res.cloudinary.com/dnzinxclg/image/upload/v1638128144/large_logo_temporaria_9f684f9c91.jpg" alt="logo" />
        </div>
    );
  }
  
  export default Colaboracao;
