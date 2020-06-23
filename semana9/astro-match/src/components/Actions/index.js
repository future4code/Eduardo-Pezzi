import React, { useState } from 'react';
import { Post } from '../utility/conection';
import { FcLike, FcDislike } from 'react-icons/fc';
import styled from 'styled-components';

const ActionsContainer= styled.div `

    display: flex;
    align-self: center;
    height: 6vh;
    width: 29vw;
`
const ActionLikeButton = styled.button `

    width: 100%;
    border-radius: 100px;
`
const ActionDisLikeButton = styled.button `

    width: 100%;
    border-radius: 100px;
`
function Action ( {person, getProfiles } ){ 

    const actionId = person.id;
    const [like, setLike] = useState('');

    const [data, setData] = useState([]);

    function sendLike (){

        setData({
          
            id: actionId,
            choice: true
        })

        Post('/choose-person', data)
        .then(isLike => {
            setLike(isLike.data.isMatch)
                
        })
            getProfiles();
    }

    function sendDisLike (){

        setData({
            id: actionId,
            choice: false
        })

        Post('/choose-person', data)
        .then(isLike => {
            setLike(isLike.data.isMatch)
                
        })
            getProfiles();
    }

    return(
        <ActionsContainer>
            <ActionDisLikeButton onClick={sendDisLike} id={actionId}>
                <FcDislike style={{fontSize: '3vh'}} />
            </ActionDisLikeButton>
            <ActionLikeButton onClick={sendLike} id={actionId}>
                <FcLike style={{fontSize: '3vh'}}   />
            </ActionLikeButton>
        </ActionsContainer>
    );
}
export { Action, ActionDisLikeButton, ActionLikeButton };