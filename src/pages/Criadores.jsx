import config from '../assets/menu/config.svg'
import projeto from '../assets/menu/projeto.svg'
import componentes from '../assets/menu/componentes.svg'
import proposito from '../assets/menu/proposito.svg'
import agradecimentos from '../assets/menu/agradecimentos.svg'
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
            <Menu />
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
