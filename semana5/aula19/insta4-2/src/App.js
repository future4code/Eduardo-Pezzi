import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Eduardo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150?=5'}
        />
      </div>

      <div className={'app-container'}>
        <Post
          nomeUsuario={'Ana'}
          fotoUsuario={'https://picsum.photos/50/50?=2'}
          fotoPost={'https://picsum.photos/200/150?=4'}
        />
      </div>

      <div className={'app-container'}>
        <Post
          nomeUsuario={'Juliana'}
          fotoUsuario={'https://picsum.photos/50/50?=3'}
          fotoPost={'https://picsum.photos/200/150?=6'}
        />
      </div>
      </div>

    );
  }
}

export default App;
