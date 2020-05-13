import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardFormacaoAcademica from './components/CardFormacaoAcademica/CardFormacaoAcademica';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './foto.png';
import Logoip from './ip.jpg';

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
      <h2>Formação Acadêmica</h2>
      <CardFormacaoAcademica 
      instituicao="Universidad Isabel I - Burgos/Espanha" 
      curso="Master's Degree - Project Management"
      />

      <CardFormacaoAcademica 
      instituicao="Pontifícia Universidade Católica - PUC-MG" 
      curso="Pós Graduação - Engenharia de Software"
      />

      <CardFormacaoAcademica 
      instituicao="Universidade Estácio de Sá - UNESA" 
      curso="Graduação - Sistemas de Informação"
      />


      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href="https://www.linkedin.com/in/eduardo-pezzi/" target="_blank">
        <ImagemButton 
          imagem="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/83/3f/a9/833fa9b8-2b53-9115-30ee-a5394b9a5026/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.png" 
          texto="Linkedin" 
        />
        </a>

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
