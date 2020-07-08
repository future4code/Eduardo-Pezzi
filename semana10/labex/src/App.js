import React, { useEffect } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Get } from './Utility/Conection';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
