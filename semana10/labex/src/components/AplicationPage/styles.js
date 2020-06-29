import styled from 'styled-components';

export const AplicationPageContainer = styled.div `

    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 76vh;
    align-self:center;
    background-color: #2B3137;
    justify-content: center;
    padding: 3vw;
`

export const AplicationPageFormContainer = styled.div `

    max-width: 50vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-flow: column;
    align-self: center;
    color: #000;
    padding-left: 1vw;

    label{
        color: white;
    }

    input {
        display: flex;
        align-self: flex-end;
    }

    button {
        color: #000;
        padding: 1vh;
        margin-top: 1vh;
    }
`