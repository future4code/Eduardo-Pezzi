import React from 'react';
import axios from 'axios';


export class Pokemon extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            pokemon: [],
        }
        
    }

    componentDidMount = () =>{
        this.gotcha();
    }
    gotcha = () => {

        axios.get ("https://pokeapi.co/api/v2/pokemon?limit=120&offset=0"
        ).then( response => {
            this.setState({pokemon: response.data})
                console.log(response)
                console.log( this.pokemon )
        }).catch(error => {
                console.log(error)
        })
    }

    render(){

        return(
            <>

            </>



        );
    }
}
export default Pokemon