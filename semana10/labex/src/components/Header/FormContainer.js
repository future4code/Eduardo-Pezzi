import React, { useState } from 'react';
import { FormContainer } from './styles';
import { Post } from '../../Utility/Conection';

import 'antd/dist/antd.css';

import
{ 
    Input,
    Tooltip,
    Space,
    Button
} 
from 'antd';

import
{
    EyeInvisibleOutlined,
    InfoCircleOutlined,
    UserOutlined,
    EyeTwoTone,
}
from '@ant-design/icons';

function HeaderContainer(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const Login = async () => {

        const body ={
            email: email,
            password: password,
        }

        await Post('/login', body)
        .then(response =>{
            setToken(response.data.token)
            console.log(response)
            window.localStorage.setItem('token', response.data.token)
        }).catch(error =>{
            window.alert('Falha ao efetuar Log in')
        })
    }
    console.log(token)

    return(
        <FormContainer>
                <Space direction="horizontal">

                    <Input size='small'
                        placeholder="E-mail de cadastro"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix=
                        {
                            <Tooltip title="Seu e-mail">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                        value={email} onChange={ (e) => setEmail(e.target.value)}
                    />

                    <Input.Password size='small'
                        placeholder="Digite a senha"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        value={password} onChange={ (p) => setPassword(p.target.value)}
                    />

                    <Button type='primary' size='small' onClick={Login}>Login</Button>
                    <Button type='secondary' size='small'>Sign in</Button>

                </Space>
            </FormContainer>
    );
}
export default HeaderContainer;