import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import { IconContainer } from "./Icon.styles";
import { BarraContainer } from "./Barra.styles";
import perfil from "../assets/materiais/perfil.svg"
import { ProfileImage } from "./Feedback.styles";
import React, { useState, useEffect } from 'react'
import { FeedbackContainer, UsuariosContainer, Main } from './Feedback.styles'
import { Link } from 'react-router-dom'

export function Feedback() {
    return (
        <section>
            <BarraContainer>
        <header>
          <h1>FEEDBACK</h1>
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
            <Link to='/criadores'>
              <IconContainer>
                <img src={cria} alt="Criadores" />
                <div className="hover-text">Criadores</div>
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
            <div>
                <Main>
                    <FeedbackContainer>
                        <div>
                            <h1 >Feedback</h1>
                            <h2>Escreva sua opinião sobre o site:</h2>
                            <p>Deixe sua crítica construtiva, seu apoio, sua sugestão para que possamos melhorar!</p>
                            <input type="text" placeholder ='Digite aqui...' />
                            <button>Enviar</button>
                        </div>
                    </FeedbackContainer>
                </Main>
            </div>
        </section>
    )
}
