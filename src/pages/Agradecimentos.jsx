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
import agradece from "../assets/menu/agradecimentos.svg";
import bio from "../assets/menu/bio.svg";
import Plipli from "../assets/Plinio.png";
import TDP from "../assets/Marcio.png";
import Danones from "../assets/Benones.png";
import Wexley from "../assets/Wesley.png";

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
          <h1>AGRADECIMENTOS</h1>
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
                <img src={agradece} alt="Agradecimentos" />
                <div className="hover-text">Agradecimentos</div>
              </IconContainer>
            </Link>
            <Link to="/criadores">
              <IconContainer>
                <img src={cria} alt="Criadores" />
                <div className="hover-text">Criadores</div>
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
      <CylinderContainer3>
        <div onClick={() => handlePopup("Plínio")}>
          <h2>Plínio</h2>
          <img src={Plipli} alt="Plínio" />
        </div>
      </CylinderContainer3>

      <CylinderContainer4>
        <div onClick={() => handlePopup("Márcio")}>
          <img src={TDP} alt="Márcio" />
          <h2>Márcio</h2>
        </div>
      </CylinderContainer4>

      <CylinderContainer3>
        <div onClick={() => handlePopup("Benones")}>
          <h2>Benones</h2>
          <img src={Danones} alt="Benones" />
        </div>
      </CylinderContainer3>

      <CylinderContainer4>
        <div onClick={() => handlePopup("Wesley")}>
          <img src={Wexley} alt="Wesley" />
          <h2>Wesley</h2>
        </div>
      </CylinderContainer4>

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
