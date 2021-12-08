import React from 'react';

import { Navbar } from './pages';
import { Banner } from './pages';
import { ProjectInfo } from './pages';
import { Secaoidealizadora } from './pages';
import { Carousel } from './pages';
import { Colaboracao } from './pages';
import { Footer } from './pages';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner heading="Histórias capazes de tocar almas e transformar o mundo" subheading="Estratégias para a reflexão e debates sobre temas sugeridos"/>
      <ProjectInfo />
      <Secaoidealizadora Title="IDEALIZADORA" Photo='Idealizadora' subTitle="Luciana Cavalcanti" subcripting="Atriz, Jornalista, Comunicadora.Pós- graduada em Jornalismo Independente e Prod. Conteúdo, UNICAP."/>
      <Carousel />
      <Colaboracao />
      <Footer />
    </div>
  );
}

export default App;