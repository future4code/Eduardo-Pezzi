import styled from 'styled-components';

export const AppContainer = styled.div `

    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    justify-content: space-evenly;
`
export const PokemonContainer = styled.div `

    width: 30vw;
    min-height: 70vh;
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

    display: flex;
    justify-content: space-around;
    max-height: 30vh;

    img {
        width: 90%;
    }   
`
export const SaintSeiyaContainer = styled.div `

    width: 30vw;
    min-height: 70vh;
    background-color: darkblue;
    padding: 1vh 0;
    text-align: center;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: white;

    img {
        width: 90%;
        display: block;
        margin: 1vh auto;
    }
`
export const SaintSeiyaImgContainer = styled.div `

    display: flex;
    justify-content: space-around;
    max-height: 30vh;

    img {
        width: 90%;
    }   
`