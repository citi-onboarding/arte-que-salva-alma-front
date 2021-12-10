import { useState, useEffect } from 'react';
import axios from 'axios';

import './Colaboracao.css';

function Colaboracao() {
    const [collaboration, setCollaboration] = useState();

    useEffect(() => {
        axios.get('https://arte-que-salva-alma.herokuapp.com/collaboration')
            .then(res => {
                setCollaboration(res.data);
                console.log(res.data);
            })
            .catch(err => console.log('Erro: ', err));
    }, []);

    console.log(collaboration);

    return (
        <div className="secaoInformacoes">
            <div className="collaboration-left"><img className="image-left" src={collaboration?.Text.PhotoLeft.url} alt="logo" /></div>
            <div className="colabore_fora">
                <h1 className="nomeCOLABORE">{collaboration?.Text.Title}</h1>

                <div className="colabore_dentro">
                    <div className="textao">
                        <h1 className="NameDoacao">{collaboration?.Text.LittleTitle}</h1>
                        <p className="textoDoacao">{collaboration?.Text.Text}</p>
                    </div>
                    <div className="contato">
                        <h1 className="Pix">{collaboration?.Text.NamePix}</h1>
                        <p className="telefone">{collaboration?.Text.Pix}</p>
                        <p className="nada"></p>
                        <p className="nome">{collaboration?.Text.PersonName}</p>
                    </div>
                </div>
            </div>
            <div className="collaboration-right"><img className="image-right" src={collaboration?.Text.PhotoRight.url} alt="logo" /></div>
        </div>
    );
}

export default Colaboracao;
