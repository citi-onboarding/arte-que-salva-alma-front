import React from 'react';

import { Banner } from './pages';
import { Navbar } from './pages';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner heading="Histórias capazes de tocar almas e transformar o mundo" subheading="Estratégias para a reflexão e debates sobre temas sugeridos"/>
    </div>
  );
}

export default App;
