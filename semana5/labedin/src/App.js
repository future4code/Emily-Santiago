import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import emilly from './emilly.jpeg';
import cesar_school from './cesar_school.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={emilly}
          nome="Emilly C. Santiago"
          descricao="Oi, eu sou a Emilly. Sou aluna do curso Full Stack do Labenu. Sou formada em engenharia mecânica, mas estou migrando para área de TI. Gosto de desenvolvimento de aplicativos mobile"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Atualmente estou no segundo módulo do curso Full Stack na Labenu. O curso apresenta, dentro de 6 meses, todas as ferramentas necessária para um desenvolvedor júnior"
        />

        <CardGrande
          imagem={cesar_school}
          nome="CESAR SCHOOL"
          descricao="Atualmente estudo desenvolvimento Mobile utilizando o Android Studio e a linguagem Kotlin"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
