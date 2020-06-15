import React from 'react';
import { AddTrackToPlaylistContainer } from './styles';
import axios from 'axios';

const hereIsTheKey = { headers: { Authorization: 'eduardo-pezzi-mello' }};

export class AddTrackToPlaylist extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            allPlayLists: [],
            name: "",
            artist: "",
            url: "",
            identificador: []
        }
    }

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            hereIsTheKey)
            .then(response1 => {
                this.setState({allPlayLists: response1.data.result.list});
                
            })
            .catch(error => {
                console.log(error)});
    }

    sendMusic = (playlistId) => {
        const body = { 
           name: this.state.music,
           artist: this.state.artist,
           url: this.state.url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
            body, hereIsTheKey)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })}

    letsCapture = (event) => {
        let input = event.target.value;
        let inputName = event.target.name;

            this.setState({
                [inputName]: input
            })
    }

    capture = (e) => {
        let valor = e.target.value;

            axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            hereIsTheKey)
            .then(response1 => {
                this.setState({identificador: response1.data.result.list});
            })
            .catch(error => {
                console.log(error)});
    }

    render(){

        const { name, artist, url, identificador } = this.state;

        return(

            <AddTrackToPlaylistContainer>
                <input type="text" name="name" onChange={this.letsCapture} 
                    value={name} placeholder="Digite o nome da música"
                />
                <input type="text" name="artist" onChange={this.letsCapture} 
                    value={artist} placeholder="Qual o artista/banda?"
                />
                <input type="text" name="url" onChange={this.letsCapture} 
                    value={url} placeholder="Coloque a URL da música"
                />
                <select onChange={this.capture}>
                    <option>Selecione a Playlist</option>
                    {identificador.map(lista => {
                        return(
                        <option value={lista.id}>{lista.name}</option>
                        )
                    })}
                </select>
            <button onClick={()=> this.sendMusic()}>Enviar</button>
                
            </AddTrackToPlaylistContainer>
        );
    }
}
export default AddTrackToPlaylist;