import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    listaDePost: [
      {
        nomeUsuario: 'finn',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'jack',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'marcelina',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    textoNovoPost: ''
  };

  handleName = (event) => {
    this.setState({ inputName: event.target.value })
  };
  handlePhoto = (event) => {
    this.setState({ inputPhoto: event.target.value })
  };
  handlePicture = (event) => {
    this.setState({ inputPicture: event.target.value })
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputName,
      fotoUsuario: this.state.inputPhoto,
      fotoPost: this.state.inputPicture
    };
    this.setState({
      listaDePost: [...this.state.listaDePost, novoPost],
      inputName: "",
      inputPhoto: "",
      inputPicture: ""
    })

  }

  render() {

    return (
      <div className={'app-container'}>
        <div>
          <input
            type="text"
            onChange={this.handleName}
            value={this.state.inputName}
            placeholder="Nome"
          />
          <input
            type="text"
            onChange={this.handlePhoto}
            value={this.state.inputPhoto}
            placeholder="Foto do Usuário"
          />
          <input
            type="text"
            onChange={this.handlePicture}
            value={this.state.inputPicture}
            placeholder="Foto do Post"
          />
          <button onClick={this.adicionarPost}>
            Post
          </button>
        </div>
        <br />

        {this.state.listaDePost.map((post) => {
          return <Post key={post.nomeUsuario}

            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        })}

        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'finn'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'jack'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        /> */}


      </div>
    );
  }
}

export default App;
