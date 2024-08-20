import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import image2 from "../assets/materiais/image2.svg"
import { BarraContainer } from "./Barra.styles"
import { CardsContainer3, CardsResponsivity } from './Criadores.styles'

import Menu from "../components/Menu"

export function Criadores() {
  return (
    <section>
        <BarraContainer>
          <header>
            <h1>Desenvolvedores</h1>
            <a href='/feedback'>
                <img src={config} alt="engrenagem" />
            </a>

            <a href='/proposito'>
                <img src={prop} alt="Propósito" />
            </a>

            <a href='/materiais'>
                <img src={comp} alt="Componentes" />
            </a>

            <a href='/agradecimentos'>
                <img src={agradece} alt="Agradecimentos" />
            </a>

            <a href='/projeto'>
                <img src={projeto} alt="projeto" />
            </a>
            
            <a href='/bibliografia'>
                <img src={bio} alt="bibliografia" />
            </a>
          </header>
        </BarraContainer>
        <CardsResponsivity>
          <CardsContainer3>
            <div>
              <img src={image2} alt="" />
              <h2>Arthur Lima</h2>
              <a href="">Ver mais</a>
            </div>
            </CardsContainer3>
            <CardsContainer3>
            <div>
              <img src={image2} alt="" />
              <h2>Igor Fernandes</h2>
              <a href="">Ver mais</a>
            </div>
            </CardsContainer3>
            <CardsContainer3>
            <div>
              <img src={image2} alt="" />
              <h2>Felipe Vaz</h2>
              <a href="">Ver mais</a>
            </div>
          </CardsContainer3>
        </CardsResponsivity>
    </section>
    
  )
}
