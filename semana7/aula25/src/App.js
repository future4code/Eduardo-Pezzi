import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUser from './components/ListaUser';

import { AppContainer } from './components/styles'

import { 
  Button, 
} from 'reactstrap';




export class App extends React.Component {

  constructor(props){
    super(props);

  this.state = {
    currentPage : "initial"
  };
}

  letsChangePage = () => {
    if (this.state.currentPage === "initial") {
      this.setState({currentPage: 'userlist'});
    } else {
      this.setState({currentPage: 'initial' });
    }
  };

  render() {
    return (

      <AppContainer>
        {this.state.currentPage === "initial" ? (<Cadastro />) : (<ListaUser />)}
        <Button color="primary" size="sm" onClick={this.letsChangePage}> Trocar Página </Button>
      </AppContainer>
  );}
}
export default App;