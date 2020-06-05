import styled from 'styled-components';

export const AppContainer = styled.div `

    width: 100vw;
    height: 100vh;
    font-family: 'M PLUS Rounded 1c', sans-serif;
`
export const PokemonContainer = styled.div `

    width: 30vw;
    min-height: 60vh;
    background-color: purple;
    padding: 1vh 0;
    text-align: center;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: white;

    img {
        display: block;
        margin: 0 auto;
        width: 85%;
    }
`
export const PokemonImgContainer = styled.div `

    width: 30vw;
    max-height: 30vh;
    min-width: 30vw;

    img {
        width: 80%;
        height: auto;
        display: block;
        margin: 0 auto;
    }
    
`
