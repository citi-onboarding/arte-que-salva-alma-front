import axios from "axios";
import { React, useEffect, useState } from "react";
import { Description, Title, Image } from "../../components";
import './Project-info.css';

const ProjectInfo = (props) => {


    const [project, setProject] = useState([]);

    console.log('aqui', project);

    useEffect(() => {
        axios.get('https://arte-que-salva-alma.herokuapp.com/project-infos')
            .then(res => {
                setProject(res.data);
                console.log(res.data);
            })
            .catch(err => console.log('Erro: ', err));
    }, []);

    return (
        <div id="projetos">
            <div className="container-info-section">
                <div className="inner-container float-left-class">
                    <div className="text left-align">
                        <Title title={project[0]?.title} />
                        <Description description={project[0]?.description} />
                    </div>
                    <div className="image">
                        {/* Imagem colocada como placeholder */}
                        <img src={project[0]?.image.url}/>
                    </div>
                </div>
                <div className="inner-container float-right-class">
                    <div className="image">
                        {/* Imagem colocada como placeholder */}
                        <img src={project[1]?.image.url} className="bottom-image" />
                    </div>
                    <div className="text right-align">
                        <Title title={project[1]?.title} />
                        <Description description={project[1]?.description} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;