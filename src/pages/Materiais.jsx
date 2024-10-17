import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { CylinderContainer, CylinderContainer2, PopupContainer, PopupContent } from './Materiais.styles';
import { BarraContainer } from "./Barra.styles";
import Menu from "../components/Menu";

import ard from '../assets/materiais/arduino.svg';
import pir from '../assets/materiais/pir.svg';
import cam from '../assets/materiais/camera.svg';
import sen from '../assets/materiais/sensor.svg';
import tela from '../assets/materiais/tela.svg';
import serv from '../assets/materiais/servo.svg';
import config from '../assets/menu/config.svg';
import prop from '../assets/menu/proposito.svg';
import comp from '../assets/menu/componentes.svg';
import cria from '../assets/menu/criadores.svg';
import agradece from '../assets/menu/agradecimentos.svg';
import projeto from '../assets/menu/projeto.svg';
import bio from '../assets/menu/bio.svg';

// Componente para os itens de materiais
const MaterialItem = ({ title, imgSrc, altText, onClick, isEven }) => {
  const Container = isEven ? CylinderContainer2 : CylinderContainer;
  return (
    <Container onClick={onClick}>
      <div>
        <h2>{title}</h2>
        <img src={imgSrc} alt={altText} />
      </div>
    </Container>
  );
};

export function Materiais() {
  const [popup, setPopup] = useState(null);

  const handleImageClick = (item) => {
    setPopup(item);
  };

  const closePopup = () => {
    setPopup(null);
  };

  // Conteúdo específico de cada item
  const materials = [
    { 
      title: 'Arduíno', 
      imgSrc: ard, 
      altText: 'arduino', 
      content: 'O Arduino Nano é uma versão compacta do Arduino, ideal para projetos com espaço limitado. Possui um microcontrolador, pinos de entrada e saída digitais e analógicos, e portas de comunicação, sendo programado em Arduino (baseado em C/C++). No Brasil, custa entre R$ 30 e R$ 70, enquanto nos EUA varia de $10 a $20.' 
    },
    { 
      title: 'Sensor PIR', 
      imgSrc: pir, 
      altText: 'sensor pir', 
      content: 'O Sensor PIR (Passive Infrared Sensor) detecta movimento ao medir variações na radiação infravermelha de objetos. É amplamente utilizado em sistemas de segurança e automação residencial. O sensor possui três pinos: alimentação, terra e saída, que se ativa com o movimento. No Brasil, seu preço varia de R$ 20 a R$ 50, enquanto nos EUA, fica entre $5 e $15.' 
    },
    { 
      title: 'Câmera', 
      imgSrc: cam, 
      altText: 'camera', 
      content: 'Uma mini câmera para Arduino é usada para capturar fotos ou vídeos em projetos de monitoramento, segurança e robótica. Compatível com a plataforma Arduino, é fácil de integrar em projetos de eletrônica. No Brasil, custa entre R$ 50 e R$ 150, enquanto nos EUA varia de $10 a $30.' 
    },
    { 
      title: 'Sensor Biométrico', 
      imgSrc: sen, 
      altText: 'leitor biométrico / sensor de digital', 
      content: 'Um sensor de digital para Arduino lê impressões digitais para autenticação em projetos de segurança, como fechaduras eletrônicas. Ele captura e compara impressões digitais com as armazenadas, enviando o resultado ao Arduino. No Brasil, esses sensores custam entre R$ 50 e R$ 150, enquanto nos EUA variam de $10 a $30.' 
    },
    { 
      title: 'Tela LCD', 
      imgSrc: tela, 
      altText: 'tela LCD', 
      content: 'A tela LCD 16x2 é um display de cristal líquido usado com Arduino para exibir até 32 caracteres em duas linhas. Custa entre R$ 20 a R$ 50 no Brasil e $5 a $15 nos Estados Unidos.' 
    },
    { 
      title: 'Servo Motor', 
      imgSrc: serv, 
      altText: 'servo motor', 
      content: 'Um servo motor é usado para controlar precisamente a posição em projetos de robótica, automação e modelos de aeronaves. Pequenos servo motores para Arduino custam entre R$ 20 a R$ 60 no Brasil e $5 a $15 nos Estados Unidos.' 
    }
  ];

  return (
    <section>
      <BarraContainer>
        <header>
          <h1>Materiais</h1>
          <div className="icons">
            <Link to='/feedback'>
              <img src={config} alt="engrenagem" />
            </Link>

            <Link to='/proposito'>
              <img src={prop} alt="Propósito" />
            </Link>

            <Link to='/projeto'>
              <img src={projeto} alt="Projeto" />
            </Link>

            <Link to='/agradecimentos'>
              <img src={agradece} alt="Agradecimentos" />
            </Link>

            <Link to='/criadores'>
              <img src={cria} alt="Criadores" />
            </Link>

            <Link to='/bibliografia'>
              <img src={bio} alt="Bibliografia" />
            </Link>
          </div>
        </header>
      </BarraContainer>

      {materials.map((material, index) => (
        <MaterialItem
          key={material.title}
          title={material.title}
          imgSrc={material.imgSrc}
          altText={material.altText}
          onClick={() => handleImageClick(material)}
          isEven={index % 2 === 1}
        />
      ))}

      {popup && (
        <PopupContainer onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <h2>{popup.title}</h2>
            <p>{popup.content}</p>
          </PopupContent>
        </PopupContainer>
      )}
    </section>
  );
}
