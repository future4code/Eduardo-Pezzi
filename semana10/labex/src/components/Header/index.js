import React, { useState } from 'react';
import { Post } from '../../Utility/Conection';

import 
{ 
    HeaderContainer,
    FormContainer,
    LogoContainer
} 
 from './styles';

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


export function Header (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Login(){

        const body ={
            email: email,
            password: password,
        }

        Post('/login', body)
    }


    return(
        <HeaderContainer>
            <LogoContainer>
                <h1>LabeX</h1>
            </LogoContainer>

            
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

                    <Button type='primary' size='small'>Login</Button>
                    <Button type='secondary' size='small'>Sign in</Button>
                </Space>
            </FormContainer>
            
        </HeaderContainer>
    )
}
export default Header;