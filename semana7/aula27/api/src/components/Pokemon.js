import React from 'react';
import axios from 'axios';
import  logo  from '../images/pokemon/logo.png'

import { PokemonContainer,
         PokemonImgContainer
        } 
 from './styles';

export class Pokemon extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            pokemon:[],
            image: ""
        }
    }

    componentDidMount = () =>{
        this.gotcha();
    }

    gotcha = () => {

        axios.get ("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then( response => {
                this.setState({pokemon: response.data.results});
                    console.log(response)
                    console.log( this.state.pokemon )
            }).catch(error => {
                    console.log(error);
            });
    };

    iWillCapture = (event) => {
        let whatAreTheKeys = event.target.value;
        axios.get (`https://pokeapi.co/api/v2/pokemon/${whatAreTheKeys}`)
            .then( response => {
                this.setState({image: response.data.sprites.front_default});
                    console.log(response)
            }).catch(error => {
                    console.log(error);
            });
    }

    render(){

        const { pokemon , image } = this.state;
        const imagem = image ? (<img src={image} alt={pokemon.name} />) : <div />

        return(
            <PokemonContainer>
                <img src={logo} alt="Pokemon" />
                <h4>Escolha seu POKEMON</h4>
                <select onChange={this.iWillCapture} >
                    <option value="Selecione" />
                    {pokemon.map(pokequal => {
                        return(
                            <option value={pokequal.name}>{pokequal.name}</option>
                        )
                    })}
                </select>
                <PokemonImgContainer>
                    {imagem}
                </PokemonImgContainer>
            </PokemonContainer>



        );
    }
}
export default Pokemon