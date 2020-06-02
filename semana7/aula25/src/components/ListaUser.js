import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListContainer = styled.div `

    display: flex;

`

export class ListaUser extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            usuario: [],
        }
        this.handleList = this.handleList.bind(this);
    }

    componentDidMount = () =>{
        this.handleList();
    }

    handleList = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
            headers: { Authorization: 'eduardo-pezzi-mello' }
        }).then (resposta => {
            this.setState({ usuario: resposta.data.name })
            window.alert('Lista obtida com sucesso');
            console.log(resposta)
            console.log(this.state)
        }).catch(error =>{
            console.log(error)
            window.alert('Erro ao obter lista de usuários')
        })
    }

    trazLista = () =>{
        this.state.usuario.map(nomes => {
            return<p>{ nomes.name }</p>
        })
    }
    render(){

        return(
           <div>
               <button onClick={this.trazLista}>Clique</button>
            </div>



        )
    }
}
export default ListaUser