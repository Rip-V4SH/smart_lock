import React, { useState } from 'react';
import config from '../assets/menu/config.svg';
import prop from '../assets/menu/proposito.svg';
import comp from '../assets/menu/componentes.svg';
import cria from '../assets/menu/criadores.svg';
import agradece from '../assets/menu/agradecimentos.svg';
import projeto from '../assets/menu/projeto.svg';
import bio from '../assets/menu/bio.svg';
import image2 from "../assets/materiais/image2.svg";
import Felipe from "../assets/Felipe.png"
import Arthur from "../assets/Arthur.png"
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
          <h1>Desenvolvedores</h1>
          <div className="icons">
            <Link to='/feedback'>
              <img src={config} alt="engrenagem" />
            </Link>
            <Link to='/projeto'>
                  <img src={projeto} alt="projeto" />
              </Link>

              <Link to='/proposito'>
                  <img src={prop} alt="Propósito" />
              </Link>

              <Link to='/materiais'>
                  <img src={comp} alt="Componentes" />
              </Link>

              <Link to='/agradecimentos'>
                  <img src={agradece} alt="Agradecimentos" />
              </Link>
              
              <Link to='/criadores'>
                  <img src={cria} alt="Criadores" />
              </Link>
              
              <Link to='/bibliografia'>
                  <img src={bio} alt="bibliografia" />
              </Link>
          </div>
        </header>
      </BarraContainer>

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
            <img src={image2} alt="Igor Fernandes" />
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
