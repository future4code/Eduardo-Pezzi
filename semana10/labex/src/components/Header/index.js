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
    const [logged, setLogged] = useState()
    const token = window.localStorage.getItem('token');


    useEffect(() => {

       /* switch (token) {
            case null:
                setLogged(<FormContainer />)
                break;
            case !null:
                setLogged(<LoggedContainer />)
                break;
            default: setLogged(<FormContainer />)
        }*/

        if (token === null){
            setLogged(<FormContainer />)
            history.push('/')
        } else {
            setLogged(<LoggedContainer />)
            history.push('/')
        }

    }, [ token, history ] )

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

    console.log(token)

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

            {logged}

        </HeaderContainer>
    )
}
export default Header;