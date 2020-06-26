import React, { useState, useEffect } from 'react';
import LoggedContainer from './LoggedContainer';
import FormContainer from './FormContainer';
import { useHistory } from 'react-router-dom';

import 
{ 
    HeaderContainer,
    LogoContainer,
    LinksContainer
} 
 from './styles';

export function Header (){

    const history = useHistory()

    useEffect(() => {
        
        const token = window.localStorage.getItem('token');

        if (token === null){
            return(
                <FormContainer />
            )
        } else {
            return(
                <LoggedContainer />
            )
        }
    }, [history] )

    const quemSomos = () =>{
        history.push('/admin')
    }

    const viagens = () =>{
        history.push('/viagens')
    }

    const contato = () =>{
        history.push('/contato')
    }

    const pedido = () =>{
        history.push('/pedido')
    }

    return(
        
        <HeaderContainer>

            <LogoContainer>
                <h1>LabeX</h1>
            </LogoContainer>

            <LinksContainer>
               <p onClick={viagens}>Viagens</p>
               <p onClick={contato}>Contato</p>
               <p onClick={pedido}>Pedido</p>
            </LinksContainer>

            <FormContainer />

        </HeaderContainer>
    )
}
export default Header;