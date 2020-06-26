import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {

  function getToken(){

    

  }
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
