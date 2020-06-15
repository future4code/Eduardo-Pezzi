import React from 'react';
import Lista from './components/Lista';
import GetAllPlaylists from './components/GetAllPlaylists';
import AddTrackToPlaylist from './components/AddTrackToPlaylist';
import {AppContainer} from './components/styles';

function App() {
  return (
    <AppContainer>
      <Lista />
      <GetAllPlaylists />
      <AddTrackToPlaylist />
    </AppContainer>
  );
}

export default App;
