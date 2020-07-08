import styled from 'styled-components';

export const MainContainer = styled.div `

    display: flex;
    width: 100vw;
    height: 89.4vh;
    background-color: #2B3137;
    padding-right: 15vw;
    padding-top: 9vh;
`
export const MainTextContainer = styled.div `

    width: 63vw;
    display: flex;
    flex-direction: column;
    padding-top: 15vh;
    padding-left: 13vw;

    p{
        font-size: 4em;
        line-height: 9vh;
        color: #FAFBFC;
        font-family: 'Roboto', sans-serif;
        display: flex;
        padding-right: 8vw;
        letter-spacing: 0.3vw;
    }

    div {
        width: 38vw;
        color: #AAA;
        font-size: 1em;
        font-family: 'Roboto', sans-serif;
        display: flex;
        letter-spacing: 0.2vw;
        line-height: 4vh;
        font-weight: 500;
    }
`
export const FormContainer = styled.div `

    width: 32vw;
    height: 72vh;
    background-color: #FAFBFC;
    display: flex;
    border-radius: 4px;
    padding: 2vw;
`