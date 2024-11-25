import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CylinderContainer3, CylinderContainer4, PopupContainer, PopupContent } from "./Agradecimentos.styles";
import { BarraContainer } from "./Barra.styles";
import { IconContainer } from "./Icon.styles";
import config from "../assets/menu/config.svg";
import prop from "../assets/menu/proposito.svg";
import comp from "../assets/menu/componentes.svg";
import cria from "../assets/menu/criadores.svg";
import projeto from "../assets/menu/projeto.svg";
import agradece from "../assets/menu/game.svg";
import bio from "../assets/menu/bio.svg";
import Plipli from "../assets/Plinio.png";
import TDP from "../assets/Marcio.png";
import Danones from "../assets/Benones.png";
import Wexley from "../assets/Wesley.png";
import Igor from "../assets/Igor.jpg"
import Felipe from "../assets/Felipe.png"
import Arthur from "../assets/Arthur.png"
import { CardContainer2, Cardinfos, CardContainer3, ImageBox2, Main, Creditos, Creditos2, CylinderContainer5 } from "./Projeto.styles";

import smartlock3 from '../assets/deep_dystopia.mp4';

export function Agradecimentos() {
  const [popup, setPopup] = useState({ name: "", message: "" });

  const handlePopup = (name) => {
    let message = "";

    switch (name) {
      case "Plínio":
        message = "Nosso professor de Robótica, responsável por fornecer todo o suporte e apoio didático necessário para a realização da parte física (Protótipo).";
        break;
      case "Márcio":
        message = "Nosso professor de Desenvolvimento de Websites, sendo responsável por passar todo seu conhecimento para que pudéssemos criar o nosso site.";
        break;
      case "Benones":
        message = "Nosso professor de Design de Games, responsável por nos apresentar todas as técnicas disponíveis para a execução do jogo, através do programa GDevelop 5.";
        break;
      case "Wesley":
        message = "Nosso professor de Design Digital, sendo fundamental para a nossa formação acadêmica na área do TI e sendo o líder supremo da UNASP.";
        break;
        case "Felipe":
        message = "Liderou a etapa final do projeto de robótica, sendo responsável pela montagem, integração e otimização do código. Seu trabalho foi essencial para corrigir problemas e garantir que o robô fosse entregue funcional e alinhado aos objetivos da equipe.";
        break;
      case "Arthur":
        message = "Foi o principal responsável pelo desenvolvimento inicial do projeto, definindo as bases e direcionando as etapas iniciais. Sua atuação foi essencial para estruturar ideias, planejar soluções e garantir um início sólido para o trabalho da equipe..";
        break;
      case "Igor":
        message = "Liderou o design, a construção e o acabamento da estrutura externa do projeto. Seu cuidado com os detalhes garantiu uma combinação perfeita entre funcionalidade e estética, resultando em uma estrutura robusta e visualmente impactante.";
        break;
      default:
        message = "Agradecimento especial!";
    }

    setPopup({ name, message });
  };

  const closePopup = () => {
    setPopup({ name: "", message: "" });
  };

  return (
    <section>
      <BarraContainer>
        <header>
          <h1>DEEP DYSTOPIA</h1>
          <div className="icons">
            <Link to="/feedback">
              <IconContainer>
                <img src={config} alt="engrenagem" />
                <div className="hover-text">Feedback</div>
              </IconContainer>
            </Link>
            <Link to="/projeto">
              <IconContainer>
                <img src={projeto} alt="projeto" />
                <div className="hover-text">Projeto</div>
              </IconContainer>
            </Link>
            <Link to="/proposito">
              <IconContainer>
                <img src={prop} alt="Propósito" />
                <div className="hover-text">Propósito</div>
              </IconContainer>
            </Link>
            <Link to="/materiais">
              <IconContainer>
                <img src={comp} alt="Componentes" />
                <div className="hover-text">Componentes</div>
              </IconContainer>
            </Link>
            <Link to="/agradecimentos">
              <IconContainer>
                <img src={agradece} alt="Jogo" />
                <div className="hover-text">Jogo</div>
              </IconContainer>
            </Link>
            <Link to="/bibliografia">
              <IconContainer>
                <img src={bio} alt="Bibliografia" />
                <div className="hover-text">Bibliografia</div>
              </IconContainer>
            </Link>
          </div>
        </header>
      </BarraContainer>
      <hr />
      <Cardinfos>
          <CardContainer2>
            <div>
              <video src={smartlock3}
              controls
              width={1080}
              autoPlay
              muted
              ></video>
            </div>
          </CardContainer2>
          <CardContainer3>
            <div>
              <h2>Deep Dystopia</h2>
              <p>Nosso jogo é uma aventura em um cenário futurista vibrante, onde toda a arte foi criada por nós mesmos, trazendo um toque único e pessoal para cada detalhe. Cada pixel foi pensado para dar vida a um universo envolvente e imersivo, repleto de cores e atmosferas que refletem a tensão e o mistério de um futuro distante.<br/>A história gira em torno de três personagens jogáveis, cada um com habilidades e personalidades distintas, que se unem para enfrentar desafios em um mundo à beira do colapso. Ao longo das três fases, os jogadores exploram ambientes variados, desde uma metrópole tecnológica decadente até bases espaciais e desertos cibernéticos. Cada fase apresenta inimigos desafiadores, puzzles intrigantes e chefes finais únicos que testam estratégia e habilidades.<br/>Com mecânicas de jogo dinâmicas e um estilo visual cuidadosamente trabalhado, nosso jogo é uma experiência que mistura ação, estratégia e narrativa em uma jornada emocionante.</p>
            </div>
          </CardContainer3>
        </Cardinfos>
      <Creditos>
            <section>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Benones")}>
                  <h2>Benones</h2>
                  <img src={Danones} alt="Benones" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Igor")}>
                  <h2>Igor F.</h2>
                  <img src={Igor} alt="Igor" />
                </div>
              </CylinderContainer5>
            </section>
            <section>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Felipe")}>
                  <h2>Felipe V.</h2>
                  <img src={Felipe} alt="Felipe" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Arthur")}>
                  <h2>Arthur L.</h2>
                  <img src={Arthur} alt="Plínio" />
                </div>
              </CylinderContainer5>
            </section>
          </Creditos>
          <Creditos2>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Benones")}>
                  <h2>Benones</h2>
                  <img src={Danones} alt="Benones" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Igor")}>
                  <h2>Igor F.</h2>
                  <img src={Igor} alt="Igor" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Felipe")}>
                  <h2>Felipe V.</h2>
                  <img src={Felipe} alt="Felipe" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Arthur")}>
                  <h2>Arthur L.</h2>
                  <img src={Arthur} alt="Plínio" />
                </div>
              </CylinderContainer5>
          </Creditos2>
      {popup.name && (
        <PopupContainer onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <h3>Agradecimento</h3>
            <p>{popup.message}</p>
          </PopupContent>
        </PopupContainer>
      )}
    </section>
  );
}
