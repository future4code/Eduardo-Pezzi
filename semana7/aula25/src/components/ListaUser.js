import React from 'react';
import { Button, Alert } from 'reactstrap'

import {
    ListContainer
}
from './styles'

import axios from 'axios';


const youGonnaBeAuthorized = {
    headers: { Authorization: "eduardo-pezzi-mello" }
};

export class ListaUser extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            usuario: [],
        }
        this.handleList = this.youGonnaBeCaught.bind(this);
    }

   

    componentDidMount = () =>{
        this.youGonnaBeCaught();
    }

    youGonnaBeCaught = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            youGonnaBeAuthorized
        ).then (resposta => {
            this.setState({ usuario: resposta.data })
            window.alert('Lista obtida com sucesso')
            console.log( this.state.usuario )
        }).catch(error =>{
            console.log( error )
            window.alert('Erro ao obter lista de usuários')
        })
    }

    youGonnaBeDeleted = (userId) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            youGonnaBeAuthorized
        ).then(() => {
            alert('Usuário removido com sucesso')
            this.youGonnaBeCaught();
        }).catch(error => {
            alert('Falha ao remover usuário')
        })
    };

    /*trazLista = () =>{
        this.state.usuario.map(nomes => {
            return<p key={nomes.id}>{nomes.name}</p>
            
        })
    }*/
    render(){

        return(
        <ListContainer>
               
            {this.state.usuario.map(user => {
            return(
            <>
                <Alert color="success">Lista carregada com sucesso.</Alert>
                <p key={user.id}>{user.name}</p><Button
                 color="danger" onClick={()=> this.youGonnaBeDeleted(user.id)}>Remover</Button>;
            </>
            )
          })}
               
        </ListContainer>
        )
    }
}
export default ListaUser