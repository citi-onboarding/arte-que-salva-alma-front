import { useState, useEffect } from 'react';
import axios from 'axios';
import { CarouselProps } from '../../components';

import './Carousel.css';

function Carrossel() {
  const [carousel, setCarousel] = useState([]);

  const loadCarousel = async () => {
    const res = await axios.get('https://arte-que-salva-alma.herokuapp.com/posts');
    setCarousel(res.data);
  };

  useEffect(() => {
    loadCarousel();
  }, []);

  return (
    <div className="container" >
      <div className="nome_conteudo">
        <h1>CONTEÚDOS</h1>
      </div>
      <div className="carousel">
        {carousel.map((item) => {
          const { images, Description, text, URL } = item;
          return (
            <CarouselProps images={images} text={text} URL={URL} Description={Description} />
          );
        })}
      </div>
    </div>
  );
}

export default Carrossel;
