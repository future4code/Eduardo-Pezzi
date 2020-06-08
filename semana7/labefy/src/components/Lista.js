import React from 'react';
import { ListaContainer } from './styles';
import axios from 'axios';

const createPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
const hereIsTheKey = { headers: { Authorization: 'eduardo-pezzi-mello' }};
let playlist = [];

export class Lista extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            playlist: playlist,
            musica: "",
            name: "",
        }
    }

    letsCapture = (event) => {
        let nome = event.target.value;

            this.setState ({name: nome})
    }

    creatingList = () => {
        const body = { 
        name: this.state.name,
        }

        axios.post(createPlaylist, body, hereIsTheKey)
            .then((response => {
                console.log(response);
            }))
            .catch(error => {
                console.log(error)
                console.log(this.state.name)
            });
    }

    render(){
            /// Economizando this.state
        const { name } = this.state;
            /// Fim da econômia

        return(

            <ListaContainer>
                <input name="musica" type="text" value={name}
                    onChange={this.letsCapture} placeholder="Digite o nome da playlist"
                />
                <button onClick={this.creatingList}>Criar</button>
            </ListaContainer>

        );
    }
}
export default Lista;