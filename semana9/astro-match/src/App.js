import React, { useState, useEffect } from 'react';
import { Get } from './components/utility/conection';
import CardPerson from './components/CardPerson/index';
import { Action } from './components/Actions/index';
import Header from './components/Header/index';
import styled from 'styled-components';

const AppContainer = styled.div `

  display: flex;
  flex-direction: row;
  background-color: #dbe0e5;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23ac92a1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  height: 97vh;
  width: 100vw;
  padding-top: 3vh;
`
const ContentContainer = styled.div `

  display: flex;
  width: 50vw;
  flex-direction: column;
`
const LeftContainer = styled.div `

  display: flex;
  width: 25vw;
`
const RightContainer = styled.div `

  display: flex;
  width: 25vw;
`

function App() {
  const [profiles, setProfiles] = useState([]); 

  function getProfiles (){
    Get('/person',)
    .then(response => {
      setProfiles(response.data.profile)
    })
  }
  
  useEffect(() =>{
    getProfiles()
  },[]);

  return (
    <AppContainer>
      <LeftContainer />
        <ContentContainer>
          <Header getProfiles={getProfiles}/>
          <CardPerson person={profiles} />
          <Action person={profiles} getProfiles={getProfiles} />
        </ContentContainer>
      <RightContainer />
    </AppContainer>
  )
}
export default App;