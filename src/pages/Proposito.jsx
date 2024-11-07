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
import { Link } from "react-router-dom"
import { CardContainer, DivCards } from './Proposito.styles'
import { BarraContainer} from './Barra.styles'

import Menu from "../components/Menu"

export function Proposito() {
  return (
    <section>
        <BarraContainer>
        <header>
            <h1>Propósitos</h1>
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
