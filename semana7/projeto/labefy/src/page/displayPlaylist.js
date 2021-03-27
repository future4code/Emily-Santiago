import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../parameters";


export default class displayPlaylist extends React.Component {
    state = {
        playlists: [],
    };

    componentDidMount() {
        this.getAllPlaylists()
    };

    getAllPlaylists = () => {
        axios
            .get(baseUrl, axiosConfig)

            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log(res.data)
            })

            .catch((err) => {
                console.log(err)
                alert("Algo deu errado no carregamento da playlist")
            })
    };

    deletePlaylist = (id) => {
        if (window.confirm("Deseja mesmo apagar sua playlist?")) {
            axios
                .delete(`${baseUrl}/${id}`, axiosConfig)
                .then((res) => {
                    this.getAllPlaylists();
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    };

    render() {
        const mapPlaylists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>DELETE</button>
                </div>
            )
        });

        return (
            <div>
                <p>PLAYLIST</p>
                {mapPlaylists}
            </div>
        )
    };
}