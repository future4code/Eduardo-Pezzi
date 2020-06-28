import React from 'react';
import { useHistory } from 'react-router-dom';
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

    const history = useHistory()

    function goToLogin(){

        history.push('/login');
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
                        style={{backgroundColor: '#FAFBFC'}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password"
                        style={{backgroundColor: '#FAFBFC'}}></Input>
                    </FormGroup>
                    <Button color="success"
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
                                style={{cursor: "hand", color: 'blue'}}
                            >CLIQUE AQUI</span> para fazer 
                            <span onClick={goToLogin}
                                style={{cursor: "hand", color: 'blue'}}
                            >LOGIN</span> e iniciar sua sessão.
                        </p>
                    </FormGroup>
                </Form>
                
            </FormContainer>
        </MainContainer>


    );
}
export default HomePage;