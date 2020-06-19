import React, { useState, useEffect } from 'react';
import { Get } from './components/utility/conection';
import CardPerson from './components/CardPerson/index';
import Action from './components/Actions/index';

function App() {
  const [profiles, setProfiles] = useState([]); 

  /*function getMatches (){
    Get('/matches',)
    .then(resp => {
    })
  }*/

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
    <div className="App">
      <CardPerson person={profiles} />
      <Action person={profiles} getProfiles={getProfiles} />
    </div>
  )
}

export default App;