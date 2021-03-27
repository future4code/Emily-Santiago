import './App.css';
import React from 'react';
import CreatePlaylist from './page/createPlaylist';
import DisplayPlaylist from './page/displayPlaylist';


export default class App extends React.Component {
  state = {
    page: "createPlaylist"
  };

  changePage = () => {
    if (this.state.page === "createPlaylist") {
      this.setState({ page: "displayPlaylist" })
    } else if (this.state.page === "displayPlaylist") {
      this.setState({ page: "createPlaylist" })
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createPlaylist":
        return <CreatePlaylist />;
      case "displayPlaylist":
        return <DisplayPlaylist />;
      default:
        return <div></div>
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>HEADER</p>
          <button onClick={this.changePage}>bananinha</button>

        </header>

        <body className="App-bory">
          <div className="container">
            {this.renderPage()}
          </div>
        </body>

        <footer className="App-footer">
          <p>FOOTER</p>
        </footer>
      </div>
    );

  }
}

