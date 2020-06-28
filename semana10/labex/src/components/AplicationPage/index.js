import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Post } from '../../Utility/Conection';
import {
    AplicationPageContainer,
    AplicationPageFormContainer
 } from './styles';

import 'antd/dist/antd.css';

import {  
    Card,
    Avatar,
} 
from 'antd';

import {  
    CheckOutlined  
} 
from '@ant-design/icons'

const { Meta } = Card;

function Aplication(){

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [applicationText, setApplicationText] = useState();
    const [profession, setProfession] = useState();
    const [country, setCountry] = useState();

    const token = window.localStorage.getItem('token');
    const PathParams = useParams();
    const history = useHistory()
    const idViagem = PathParams.id;
    const nameViagem = PathParams.name;
    const planetViagem = PathParams.planet;

    async function applyToTrip(event){

        event.preventDefault();

        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }

        await Post(`/trips/${idViagem}/apply`, body)
        .then(response => {
            window.alert('Aplicação concluida com sucesso, aguarde contato')
            console.log(response)
        })
        .catch(error => {
            window.alert('Falha na aplicação, tente novamente.')
        })
    }

    useEffect(() => {
        
        if (token === null) {
            history.push('/login')
        }
    }, [ history, token ])

    return(
        <AplicationPageContainer>

            <div className="site-card-border-less-wrapper">
                <Card id={idViagem} title="Sua Aplicação" bordered={true}
                    style={{ 
                        backgroundColor: 'lightgray',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1vh'
                    }}
                        cover={
                            <img alt="Sua Aplicação"
                            src="https://picsum.photos/300/200" />
                        }
                        actions={[
                            <CheckOutlined
                            value={idViagem}
                            
                            />,
                        ]} 
                    > 
                    <Meta 
                        avatar={<Avatar src="https://picsum.photos/30/30" />}
                        title={planetViagem}
                        description={nameViagem}
                    />
                </Card>
            </div>

            <AplicationPageFormContainer>

                <form onSubmit={applyToTrip}>
                    <label for="name">Nome: </label>
                    <input type="text" required
                        value={name}
                        onChange={ (n) => setName(n.target.value) }
                    />

                    <label for="age">Idade: </label>
                    <input type="number" required
                        value={age}
                        onChange={ (a) => setAge(a.target.value) }
                    />

                    <label for="applicationText">Motivo: </label>
                    <input type="text" required
                        value={applicationText}
                        onChange={ (at) => setApplicationText(at.target.value)}
                    />

                    <label for="profession">Profissão: </label>
                    <input type="text" required
                        value={profession}
                        onChange={ (p) => setProfession(p.target.value)}
                    />

                    <label for="country">País: </label>
                    <input type="text" required
                        value={country}
                        onChange={ (c) => setCountry(c.target.value)}
                    />

                    <button>Enviar</button>
                </form>
            </AplicationPageFormContainer>
        </AplicationPageContainer>

    );
}
export default Aplication;