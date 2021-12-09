import React from 'react';

import { Carousel } from './pages';
import { Colaboracao } from './pages';
import { Banner } from './pages';
import { Navbar } from './pages';
import { Footer } from './pages';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner heading="Histórias capazes de tocar almas e transformar o mundo" subheading="Estratégias para a reflexão e debates sobre temas sugeridos"/>
      <Carousel />
      <Colaboracao />
      <Footer />
    </div>
  );
}

export default App;

