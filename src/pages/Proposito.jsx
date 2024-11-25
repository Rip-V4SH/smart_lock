import seg from '../assets/seguranca_light.svg'
import mao from '../assets/mao_light.svg'
import nuvem from '../assets/nuvem_light.svg'
import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/game.svg'
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
        <DivCards>
            <CardContainer>
            <div>              
              <h2>SEGURANÇA</h2>
              <section>
                <p>A área de segurança é pouco explorada nos projetos de TCC, o que nos motivou a dar destaque a esse tema em nosso trabalho. Nosso objetivo foi desenvolver a <strong>Smart Lock</strong>, um dispositivo que incorpora diversos requisitos e barreiras de segurança essenciais para atender às necessidades do consumidor, oferecendo soluções inovadoras e eficazes para a proteção de bens e informações.</p>              
              <img src={seg} alt="escudo simbolizando segurança" />
              </section>
            </div>
            </CardContainer>
            <CardContainer>
            <div>
              <h2>ACESSIBILIDADE</h2>
              <section>
                <img src={mao} alt="maozinha" />
                <p>Nossos conceitos e ideias sempre convergem para um único objetivo: oferecer o melhor custo-benefício aos nossos clientes. Acreditamos que tecnologia de ponta deve ser acessível a todos, independentemente de limitações financeiras. Por isso, nos empenhamos em desenvolver produtos inovadores e de alta qualidade, garantindo que pessoas que normalmente não teriam acesso a esse nível de tecnologia possam desfrutar de soluções avançadas e eficientes em seu dia a dia.</p>
              </section>            
            </div>
            </CardContainer>
            <CardContainer>
            <div>              
              <h2>INTEGRAÇÕES</h2>
              <section>
                <p>O Bluetooth desempenha um papel obrigatório e essencial no funcionamento completo da Smart Lock, atuando como um aliado indispensável para suas operações. Ele é fundamental em processos-chave, como o cadastro de digitais, garantindo conectividade eficiente e integração perfeita entre o dispositivo e o usuário.</p>                 
                <img src={nuvem} alt="Nuvemzinha" />
              </section>
            </div>
            </CardContainer>
        </DivCards>
    </section>
  )
}
