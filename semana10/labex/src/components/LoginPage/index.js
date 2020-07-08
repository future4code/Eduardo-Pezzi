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
    const [token, setToken] = useState('');
    const [answer, setAnswer] = useState()

    const history = useHistory();

        const Login = async () => {

            const body ={
                email: email,
                password: password,
            }
    
            await Post('/login', body)
            .then(response =>{
                setToken(response.data.token)
                setAnswer(response.data.success)
                window.localStorage.setItem('token', response.data.token)
                window.localStorage.setItem('success', response.data.success)
                history.push('/viagens');
            }).catch(error =>{
                window.alert('Falha ao efetuar Log in')
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
                        >Faça Login</p>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" required
                        style={{backgroundColor: '#FAFBFC'}}
                        value={email} onChange={ (e) => setEmail(e.target.value)}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" required
                        style={{backgroundColor: '#FAFBFC'}}
                        value={password} onChange={ (p) => setPassword(p.target.value)}>
                        </Input>
                    </FormGroup>
                    <Button color="primary"
                        onClick={Login}
                        style={{
                            width: '27vw',
                            height: '10vh',
                            marginTop: '3.5vh',
                            marginBottom: '4.5vh'
                            }}>Login</Button>
                    <FormGroup>
                        <p style={{
                            fontSize:'0.9em',
                            paddingLeft:'0.5vw',
                            color: '#222'
                        }}>
                            Já está cadastrado? <br />
                            <span
                                style={{cursor: "pointer", color: 'blue'}}
                            >CLIQUE AQUI</span> para fazer 
                            <span
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