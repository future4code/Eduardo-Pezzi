import React from 'react';
import axios from 'axios';

import { 
    CadastroContainer ,
} from './styles'

import { 
    Button, 
    Form, 
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

export class Cadastro extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            nome: "",
            email: "",
        }
        this.letsCapture = this.letsCapture.bind(this);
    }

    ///////////// início criar usuario.
    youGonnaBeCreated = () => {
        const body = {
        name: this.state.nome,
        email: this.state.email,
    }
    
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        ,body, {
            headers: { Authorization: 'eduardo-pezzi-mello' }
     }).then((response) => {
            window.alert('Dados enviados com sucesso')
        }).catch((error) => {
            window.alert('Erro ao enviar dados')
     })}
    //////////////// final criar usuario.


    /////////////// Tratando campos input com atributo name
    letsCapture (event){
        let valor = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: valor
        });
    }
    ////////////// Final tratamento campos input.
    
    
    render(){
        ///////// Chega de this.state
        const { nome, email } = this.state;
        //////// Final chega de this.state
    
        return(

            <CadastroContainer>
                <Form>
                    <FormGroup>
                        <Label for="Form">
                            Digite Seu Nome:
                        </Label>

                        <Input name="nome"
                            value={nome}
                            onChange={this.letsCapture}
                            placeholder="Digite seu nome"
                        />
                
                        <Label for="FormEmail">
                            Digite Seu Email:
                        </Label>

                        <Input type="email" name="email"
                            value={email}
                            onChange={this.letsCapture}
                            placeholder="Digite seu email"
                        />

                        <Button color="primary" size="sm"
                        onClick={this.youGonnaBeCreated}>Enviar</Button>
                    </FormGroup>
                </Form>
            </CadastroContainer>
        )};}

export default Cadastro;