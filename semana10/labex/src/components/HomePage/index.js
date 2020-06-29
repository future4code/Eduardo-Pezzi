import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Post } from '../../Utility/Conection';
import {
    MainContainer,
    FormContainer,
    MainTextContainer
} from './styles';

import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

export function HomePage (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body ={
        email: email,
        password: password,
    }

    const history = useHistory()

    function goToLogin(){

        history.push('/login');
    }

    function SignUP(){

        Post('/signup', body)
        .then(response => {
            window.alert('Usuário criado com sucesso')
            history.push('/login')
        }).catch(error => {
            window.alert('Erro ao criar usuário')
        })

    }

    return(
        <MainContainer>
            <MainTextContainer>
                <p>
                    Viagens<br /> Espaciais
                </p>
                <div>
                    Sua vida fora da Terra começa aqui, conheça os planetas do sistema solar e tone-se um cidadão do universo!
                </div>
            </MainTextContainer>
            <FormContainer>
                <Form>
                    <FormGroup>
                        <br />
                        <p
                        style={{fontSize: '2vw',
                        fontFamily: 'Roboto, sans-serif'}}
                        >Faça sua inscrição</p>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email"
                        style={{backgroundColor: '#FAFBFC'}}
                        value={email} onChange={ (e) => setEmail(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password"
                        style={{backgroundColor: '#FAFBFC'}}
                        value={password} onChange={ (p) => setPassword(p.target.value)}></Input>
                    </FormGroup>
                    <Button color="success" onClick={SignUP}
                        style={{
                            width: '27vw',
                            height: '10vh',
                            marginTop: '3.5vh',
                            marginBottom: '4.5vh'
                            }}>Sign up</Button>
                    <FormGroup>
                        <p style={{
                            fontSize:'0.9em',
                            paddingLeft:'0.5vw',
                            color: '#222'
                        }}>
                            Já está cadastrado? <br />
                            <span onClick={goToLogin}
                                style={{cursor: "pointer", color: 'blue'}}
                            >CLIQUE AQUI</span> para fazer 
                            <span onClick={goToLogin}
                                style={{cursor: "pointer", color: 'blue'}}
                            >LOGIN</span> e iniciar sua sessão.
                        </p>
                    </FormGroup>
                </Form>
                
            </FormContainer>
        </MainContainer>


    );
}
export default HomePage;