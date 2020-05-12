import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './foto.png';
import Logoip from './ip.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h1>Dados pessoais</h1>
        <CardGrande 
          imagem={Foto} 
          nome="Eduardo Pezzi" 
          descricao="Olá, me chamo Eduardo Pezzi e sou um desenvolvedor Full Stack em formação pela LaBenu!"
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
          descricao="Trabalhando para ser um desenvolvedor Full Stack"
        />
        
        <CardGrande 
          imagem={Logoip}
          nome="IP Informática" 
          descricao="Sócio Administrador" 
        />

        <CardGrande 
          imagem="https://imagesapt.apontador-assets.com/fit-in/320x240/4e281243305d432ea1c55ef8bdfbd751/lojas-americanas-sa.png" 
          nome="LASA" 
          descricao="Personalização de ambiente BI Oracle OBIEE" 
        />
      </div>

      <div className="page-section-container">
      <h2>Informações de Contato</h2>
      <CardPequeno 
      tituloendereco="Endereço: " 
      endereco="Rua Chaves Faria, 148 - São Cristovão, Rio de Janeiro - RJ"  
      email="edupezz@gmail.com" 
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
