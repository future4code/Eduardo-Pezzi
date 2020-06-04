import React from 'react';
import { Button } from 'reactstrap'
import {
    ListContainer,
    MapContainer
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
        this.youGonnaBeCaught = this.youGonnaBeCaught.bind(this);
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
            console.log( this.usuario )
        }).catch(error =>{
            console.log( error )
            window.alert('Erro ao obter lista de usuários')
        })
    }

    youGonnaBeDeleted = (userId) => {

        const isItConfirmed = (window.confirm("Deseja remover o usuario?"));
        if (isItConfirmed === true){

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            youGonnaBeAuthorized
        ).then(() => {
            console.log(isItConfirmed)
            alert('Usuário removido com sucesso')
            this.youGonnaBeCaught();
        }).catch(error => {
            alert('Falha ao remover usuário')
        })
    } else {
        window.alert('Usuário não deletado')
    }
    };

    render(){

        const { usuario } = this.state;

        return(
        <ListContainer>
               
            {usuario.map(user => {
            return(
            <>
                <MapContainer>
                    <span key={user.id}>{user.name}</span>
                    <Button color="danger" size="sm" onClick={()=> this.youGonnaBeDeleted(user.id)}>
                        Remover
                    </Button>
                </MapContainer>
            </>
            )
          })}
               
        </ListContainer>
        )
    }
}
export default ListaUser