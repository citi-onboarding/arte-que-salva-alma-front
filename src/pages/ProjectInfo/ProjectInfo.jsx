import axios from "axios";
import { React , useEffect, useState}  from "react";
import { Description, Title, Image } from "../../components";
import './ProjectInfo.css';


const ProjectInfo = (props) => {


    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:1337/project-infos`)
            .then(res => {
                setProject(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch(err => console.log('Erro: ',err));
    },[]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="container-project">
                    <div className="inner-container">
                        <div className="text left-align">
                            <Title title={project[0].title}/>
                            <Description description={project[0].description} />
                        </div>
                        <div className="image">
                            {/* Imagem colocada como placeholder */}
                            <Image src={project[0].image.url}/>
                        </div>
                    </div>
                    <div className="inner-container">
                        <div className="image">
                            {/* Imagem colocada como placeholder */}
                            <Image src={project[1].image.url}/>
                        </div>
                        <div className="text right-align">
                            <Title title={project[1].title}/>
                            <Description description={project[1].description} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectInfo;