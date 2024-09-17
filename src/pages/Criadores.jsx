import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import image2 from "../assets/materiais/image2.svg"
import { Link } from "react-router-dom"
import { BarraContainer } from "./Barra.styles"
import { CardsContainer3, CardsResponsivity } from './Criadores.styles'
import Menu from "../components/Menu"

export function Criadores() {
  return (
    <section>
        <BarraContainer>
          <header>
            <h1>Desenvolvedores</h1>
            <div className="icons"> 
              <Link to='/feedback'>
                  <img src={config} alt="engrenagem" />
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
              
              <Link to='/projeto'>
                <img src={projeto} alt="Projeto" />
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
              <img src={image2} alt="" />
              <h2>Arthur Lima</h2>
              <button href="">Ver mais</button>
            </div>
            </CardsContainer3>
            <CardsContainer3>
            <div>
              <img src={image2} alt="" />
              <h2>Igor Fernandes</h2>
              <button href="">Ver mais</button>
            </div>
            </CardsContainer3>
            <CardsContainer3>
            <div>
              <img src={image2} alt="" />
              <h2>Felipe Vaz</h2>
              <button href="">Ver mais</button>
            </div>
          </CardsContainer3>
        </CardsResponsivity>
    </section>
    
  )
}
