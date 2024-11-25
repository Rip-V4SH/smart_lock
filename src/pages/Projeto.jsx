import React, { useState } from "react";
import { BarraContainer } from "./Barra.styles";
import { IconContainer } from "./Icon.styles";
import { Link } from "react-router-dom";
import config from '../assets/menu/config.svg';
import prop from '../assets/menu/proposito.svg';
import comp from '../assets/menu/componentes.svg';
import cria from '../assets/menu/criadores.svg';
import agradece from '../assets/menu/game.svg';
import projeto from '../assets/menu/projeto.svg';
import bio from '../assets/menu/bio.svg';
import { CardContainer2, Cardinfos, CardContainer3, ImageBox2, Main, Creditos, Creditos2, CylinderContainer5 } from "./Projeto.styles";
import { CylinderContainer3, CylinderContainer4, PopupContainer, PopupContent } from "./Agradecimentos.styles";
import TDP from "../assets/Marcio.png";
import Plipli from "../assets/Plinio.png";
import Igor from "../assets/Igor.jpg";
import Felipe from "../assets/Felipe.png";
import Arthur from "../assets/Arthur.png";
import smartLock from '../assets/smart_lock.jpg';
import smartLock2 from '../assets/Movie002.mp4';

export function Projeto() {
  const [popup, setPopup] = useState({ name: "", message: "" });

  const handlePopup = (name) => {
    let message = "";

    switch (name) {
      case "Plínio":
        message = "Nosso professor de Robótica, responsável por fornecer todo o suporte e apoio didático necessário para a realização da parte física (Protótipo).";
        break;
      case "Márcio":
        message = "Nosso professor de Desenvolvimento de Websites, sendo responsável por passar todo seu conhecimento para que pudéssemos criar o nosso Aplicativo.";
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
          <h1>SMART LOCK</h1>
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
            <h2>Projeto</h2>
            <p>Com a nossa maçaneta com leitor biométrico, você traz segurança para sua casa sem comprometer o seu orçamento. Com ela, você terá:

            Controle total de acesso: Monitore com precisão quem entra e sai de sua residência, com registros acessíveis diretamente no aplicativo.
            Sistema de alerta avançado: Receba notificações em tempo real no seu smartphone em caso de tentativas de acesso não autorizadas, além de comunicação automática com serviços de emergência em situações críticas.
            Praticidade no dia a dia: Elimine a necessidade de chaves, simplificando sua rotina e aumentando a conveniência ao acessar sua casa.
          </p>
          </div>
        </CardContainer2>
        <CardContainer3>
          <div>
            <h2>Aplicativo</h2>
            <p>Nosso aplicativo foi desenvolvido para garantir a máxima segurança da sua casa, oferecendo recursos essenciais e tecnologia avançada. Entre suas funcionalidades, está a possibilidade de realizar chamadas diretas para serviços de emergência com apenas um toque, ativação automática de alarme em caso de tentativas de invasão, e um sistema inteligente capaz de detectar presenças suspeitas no ambiente. Tudo isso é integrado de forma prática e acessível, permitindo que você monitore e proteja sua residência a qualquer momento e de onde estiver, trazendo tranquilidade e segurança ao seu dia a dia.</p>
          </div>
        </CardContainer3>
      </Cardinfos>
          <ImageBox2>
              <img src={smartLock} alt="Smart Lock" />
              <video src={smartLock2}
              controls
              width={300}
              autoPlay
              muted
              >
              </video>
          </ImageBox2>
      <Creditos>
        <section>
          <CylinderContainer5>
            <div onClick={() => handlePopup("Plínio")}>
              <h2>Plínio</h2>
              <img src={Plipli} alt="Plínio" />
            </div>
          </CylinderContainer5>
          <CylinderContainer5>
            <div onClick={() => handlePopup("Márcio")}>
              <h2>Márcio M.</h2>
              <img src={TDP} alt="Márcio" />
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
              <img src={Arthur} alt="Arthur" />
            </div>
          </CylinderContainer5>
        </section>
        <section>
          <CylinderContainer5>
            <div onClick={() => handlePopup("Igor")}>
              <h2>Igor F.</h2>
              <img src={Igor} alt="Igor" />
            </div>
          </CylinderContainer5>
        </section>
      </Creditos>
      <Creditos2>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Plínio")}>
                  <h2>Plínio</h2>
                  <img src={Plipli} alt="Plínio" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Márcio")}>
                  <h2>Marcio M.</h2>
                  <img src={TDP} alt="Plínio" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Felipe")}>
                  <h2>Felipe V.</h2>
                  <img src={Felipe} alt="Plínio" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Arthur")}>
                  <h2>Arthur L.</h2>
                  <img src={Arthur} alt="Plínio" />
                </div>
              </CylinderContainer5>
              <CylinderContainer5>
                <div onClick={() => handlePopup("Igor")}>
                  <h2>Igor F.</h2>
                  <img src={Igor} alt="Plínio" />
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
