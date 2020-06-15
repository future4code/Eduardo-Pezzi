import React from 'react';
import axios from 'axios';
import { GetAllPlaylistsContainer } from './styles';

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const hereIsTheKey = { headers: { Authorization: 'eduardo-pezzi-mello' }};

export class GetAllPlaylists extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            
            allPlayLists: [],
        }
    }

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {

        axios.get(url, hereIsTheKey)
            .then(response1 => {
                this.setState({allPlayLists: response1.data.result.list});
                
            })
            .catch(error => {
                console.log(error)});
    }

    deletePlaylist = (playlistId) => {

        axios.delete
        (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
            hereIsTheKey)
            .then(response =>{
                window.alert('Playlist Removida com Sucesso')
                this.getAllPlaylists();
            }).catch(error => {
                window.alert('Erro ao remover playlist')
                console.log(error);
            })
    }

    render(){

        const { allPlayLists } = this.state;

        return(
            <GetAllPlaylistsContainer>
                    {allPlayLists.map(listname => {
                        return(
                        <>
                            <p
                                key={listname.id} value={listname.name}>{listname.name}
                            </p>
                            <button onClick={() => this.deletePlaylist(listname.id)}>
                                Excluir
                            </button>
                        </>)
                    })}  
            </GetAllPlaylistsContainer>
        );
    }
}
export default GetAllPlaylists;