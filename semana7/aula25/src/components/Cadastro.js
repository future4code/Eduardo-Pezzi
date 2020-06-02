import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const CadastroContainer = styled.div `

    display: flex;
    height: auto;
    background-color: lightgray;
    align-self: center;
    justify-content: center;
    flex-flow: column;

`
const FormUsuario = styled.input `

    display: flex;
    background-color: gray;
    border: thin solid lightgreen;
    color: white;

`
const FormEmail = styled.input `

    display: flex;
    background-color: gray;
    border: thin solid lightgreen;
    color: white;

`
const Button = styled.button `

    
    background: gray;
    border: thin solid lightgreen;
    color: white;

`
export class Cadastro extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            nome: "",
            email: "",

        }
        this.handleValue = this.handleValue.bind(this);
    }


    ///////////// início criar usuario.
    createUser = () =>{
        const body = {
        name: this.state.nome,
        email: this.state.email,
        }
    

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    , body, {
        headers: { Authorization: 'eduardo-pezzi-mello' }
    }).then((response) => {
        window.alert('Dados enviados com sucesso')
    }).catch((error) => {
        window.alert('Erro ao enviar dados')
    })
    }
    //////////////// final criar usuario.


    /////////////// Tratando campos input com atributo name
    handleValue (event){
        let valor = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: valor
        });
    }
    ////////////// Final tratamento campos input.
    
    
    render(){
        const { nome, email } = this.state;
    
        return(

            <CadastroContainer>
                <label for="FormUsuario">Digite Seu Nome: </label>
                <FormUsuario name="nome"
                value={nome}
                onChange={this.handleValue}
                placeholder="Digite seu nome" />
                
                <label for="FormEmail">Digite Seu Email: </label>
                <FormEmail name="email"
                value={email}
                onChange={this.handleValue}
                placeholder="Digite seu email" />

                <Button onClick={this.createUser}>Enviar</Button>
            </CadastroContainer>
        )};
}
export default Cadastro;