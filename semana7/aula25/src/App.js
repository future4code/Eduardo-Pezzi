import React from 'react';
import Cadastro from './components/Cadastro';
import styled from 'styled-components';
import axios from 'axios';
import ListaUser from './components/ListaUser'

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
      <ListaUser />

    </MainContainer>
  );
}

export default App;
