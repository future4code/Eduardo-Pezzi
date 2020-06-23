import React from 'react';
import { Put } from '../utility/conection';
import { MdCached } from 'react-icons/md';
import styled from 'styled-components';

const HeaderContainer = styled.div `

    display: flex;
    align-content:center;
`

function Header ( { getProfiles } ){

    function ClearMatches(){
    Put('/clear',)
    .then(response =>{
        alert('Matches Limpos')
        getProfiles()
    })}

    return(
        <HeaderContainer>
            <MdCached onClick={ClearMatches} 
                style={{
                    fontSize: '5vh',
                    color: 'black',
                    cursor: 'hand'
                }}
            />
        </HeaderContainer>
    );
}
export default Header;