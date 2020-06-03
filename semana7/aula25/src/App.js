import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUser from './components/ListaUser';
import { Button } from 'reactstrap';


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

      <>
        <Button color="primary" size="sm" onClick={this.letsChangePage}> Trocar Página </Button>
        {this.state.currentPage === "initial" ? (<Cadastro />) : (<ListaUser />)}
      </>
  );}
}
export default App;