import React from "react";
import { axiosConfig, baseUrl } from "../parameters";
import axios from "axios";

export default class createPlaylist extends React.Component {
    state = {
        name: ""
    };

    handleName = (event) => {
        this.setState({ name: event.target.value })
    };

    createPlaylistLabefy = () => {

        const bory = {
            name: this.state.name
        }

        axios.post(baseUrl, bory, axiosConfig)
            .then((res) => {
                console.log(res);
                alert("Playlist foi criada com sucesso! ")
                this.setState({ name: "" })
            })
            .catch((err) => {
                alert("Deu ruim")
                console.log(err)
            })

    }

    render() {
        return (
            <div className="Container">
                <p>CRIAR PLAYLIST</p>
                <label>NOME PLAYLIST</label>
                <input onChange={this.handleName} value={this.state.name} />
                <button onClick={this.createPlaylistLabefy}>ENVIAR</button>
            </div>
        )
    };
}