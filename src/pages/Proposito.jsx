import seg from '../assets/seguranca_light.svg'
import mao from '../assets/mao_light.svg'
import nuvem from '../assets/nuvem_light.svg'
import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import { IconContainer } from "./Icon.styles";
import { Link } from "react-router-dom"
import { CardContainer, DivCards } from './Proposito.styles'
import { BarraContainer} from './Barra.styles'

import Menu from "../components/Menu"

export function Proposito() {
  return (
    <section>
        <BarraContainer>
        <header>
          <h1>PROPÓSITOS</h1>
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
        <DivCards>
            <CardContainer>
            <div>
                <h2>SEGURANÇA</h2>
                <p>A área da segurança é pouca explorada nos projetos de TCC. Decidimos dar ênfase a ela, por meio da criação da Smart Lock que contém muitos requisitos e barreiras de seguranças vitais para o consumidor.</p>
                <img src={seg} alt="escudo simbolizando segurança" />
            </div>
            </CardContainer>
            <CardContainer>
            <div>
                <h2>ACESSIBILIDADE</h2>
                <p>Nossos conceitos e idéias sempre levam ao um único denominador comum: custo-benefício é o que prezamos. Buscamos entregar um produto com a mais alta tecnologia para pessoas que normalmente não conseguiriam adquirir.</p>
                <img src={mao} alt="maozinha" />
            </div>
            </CardContainer>
            <CardContainer>
            <div>
                <h2>INTEGRAÇÕES</h2>
                <p>Um quesito obrigatório, aliado importante para o andamento e funcionamento total da Smart Lock, já que o uso do Bluetooth será um agente essencial e indispensável como no cadastro de digitais.</p>
                <img src={nuvem} alt="Nuvemzinha" />
            </div>
            </CardContainer>
        </DivCards>
    </section>
  )
}
