import './CarouselProps.css';

function CarrosselProps(props) {

    return (
        <div className="item">
            <div className="image">
                <a href={props.URL}><img src={props.images.url} alt={props.text} width="260px" /></a>
            </div>
            <div className="info">
                <a className="nomedovídeo" href={props.URL}>{props.text}</a>
                <a className="descricaodovideo" href={props.URL}><p>{props.Description}</p></a>
            </div>
        </div>
    );
}

export default CarrosselProps;
