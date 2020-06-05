import React from 'react';
import axios from 'axios';
import { SaintSeiyaContainer,
         SaintSeiyaImgContainer
} from './styles';
import logo from '../images/saintseiya/LOGO.png'

export class SaintSeiya extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            cavaleiro: [],
            image: ""
        }
    }

    componentDidMount = () => {
        this.gettingTheWarrior();
    }

    gettingTheWarrior = () => {

        axios.get('https://saint-seiya-api.herokuapp.com/api/characters',
        ).then(response => {
            this.setState({cavaleiro: response.data});
            console.log(response)
            console.log(this.state.cavaleiro)
        }).catch(error =>{
            console.log(error);
        });
    }

    choosingWarrior = (event) => {
        let whoWillFight = event.target.value;
        axios.get('https://saint-seiya-api.herokuapp.com/api/characters',
        ).then(response => {
            this.setState({image: response.data.cloths});
        }).catch(error =>{
            console.log(error);
        });
    }

    render(){

        const { cavaleiro, image } = this.state;
        const imagem = image ? (<img src={image} alt={cavaleiro.name} />) : <div />

        return(
            <SaintSeiyaContainer>
                <img src={logo} alt="Saint Seiya" />
                <h4>Escolha seu CAVALEIRO</h4>
                <select onChange={this.choosingWarrior}>
                    <option>Selecione</option>
                    {cavaleiro.map(quem => {
                        return(
                        <option value={quem.name}>{quem.name}</option>
                        )
                    })}
                </select>
                <SaintSeiyaImgContainer>
                    {imagem}
                </SaintSeiyaImgContainer>
            </SaintSeiyaContainer>



        );
    }
}
export default SaintSeiya;