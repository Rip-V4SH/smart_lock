import React, { useState } from 'react';
import config from '../assets/menu/config.svg';
import prop from '../assets/menu/proposito.svg';
import comp from '../assets/menu/componentes.svg';
import cria from '../assets/menu/criadores.svg';
import agradece from '../assets/menu/game.svg';
import projeto from '../assets/menu/projeto.svg';
import bio from '../assets/menu/bio.svg';
import Igor from "../assets/Igor.jpg"
import Felipe from "../assets/Felipe.png"
import Arthur from "../assets/Arthur.png"
import { IconContainer } from "./Icon.styles";
import { Link } from "react-router-dom";
import { BarraContainer } from "./Barra.styles";
import { CardsContainer3, CardsResponsivity, ExpandableContent } from './Criadores.styles';
import Menu from "../components/Menu";


export function Criadores() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (name) => {
    setExpanded(prevState => (prevState === name ? null : name));
  };

  return (
    <section>
      <BarraContainer>
        <header>
          <h1>DESENVOLVEDORES</h1>
          <div className="icons">
            <Link to='/feedback'>
              <IconContainer>
                <img src={config} alt="engrenagem" />
                <div className="hover-text">Feedback</div>
              </IconContainer>
            </Link>
            <Link to='/projeto'>
              <IconContainer>
                <img src={projeto} alt="projeto" />
                <div className="hover-text">Projeto</div>
              </IconContainer>
            </Link>
            <Link to='/proposito'>
              <IconContainer>
                <img src={prop} alt="Propósito" />
                <div className="hover-text">Propósito</div>
              </IconContainer>
            </Link>
            <Link to='/materiais'>
              <IconContainer>
                <img src={comp} alt="Componentes" />
                <div className="hover-text">Componentes</div>
              </IconContainer>
            </Link>
            <Link to='/agradecimentos'>
              <IconContainer>
                <img src={agradece} alt="Agradecimentos" />
                <div className="hover-text">Agradecimentos</div>
              </IconContainer>
            </Link>
            <Link to='/bibliografia'>
              <IconContainer>
                <img src={bio} alt="Bibliografia" />
                <div className="hover-text">Bibliografia</div>
              </IconContainer>
            </Link>
          </div>
        </header>
      </BarraContainer>
      <hr />
      <CardsResponsivity>
        <CardsContainer3>
          <div>
            <img src={Arthur} alt="Arthur Lima" />
            <h2>Arthur Lima</h2>
            <button onClick={() => handleToggle('arthur')}>
              {expanded === 'arthur' ? 'Ver menos' : 'Ver mais'}
            </button>
            {expanded === 'arthur' && (
              <ExpandableContent>
                <p>Programador líder, responsável pelo desenvolvimento do site, tanto design quanto funcionalidade.</p>
              </ExpandableContent>
            )}
          </div>
        </CardsContainer3>

        <CardsContainer3>
          <div>
            <img src={Igor} alt="Igor Fernandes" />
            <h2>Igor Fernandes</h2>
            <button onClick={() => handleToggle('igor')}>
              {expanded === 'igor' ? 'Ver menos' : 'Ver mais'}
            </button>
            {expanded === 'igor' && (
              <ExpandableContent>
                <p>Programador co-líder, responsável por sugestões ao site e nos textos.</p>
              </ExpandableContent>
            )}
          </div>
        </CardsContainer3>

        <CardsContainer3>
          <div>
            <img src={Felipe} alt="Felipe Vaz" />
            <h2>Felipe Vaz</h2>
            <button onClick={() => handleToggle('felipe')}>
              {expanded === 'felipe' ? 'Ver menos' : 'Ver mais'}
            </button>
            {expanded === 'felipe' && (
              <ExpandableContent>
                <p>Programador co-líder, responsável pela paleta de cores, trazendo uma ideia minimalista.</p>
              </ExpandableContent>
            )}
          </div>
        </CardsContainer3>
      </CardsResponsivity>
    </section>
  );
}
