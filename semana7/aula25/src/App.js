import React from 'react';
import Cadastro from './components/Cadastro';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div `

  width: 70vw;
  height: auto;
  display: flex;
  background-color: darkblue;
  justify-content: center;

`


function App() {
  return (
    <MainContainer>

      <Cadastro />

    </MainContainer>
  );
}

export default App;
