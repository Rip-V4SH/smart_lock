import image from "../assets/materiais/image.svg"
import config from '../assets/menu/config.svg'
import prop from "../assets/menu/proposito.svg"
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import projeto from '../assets/menu/projeto.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import bio from '../assets/menu/bio.svg'
import Plipli from "../assets/Plinio.png"
import TDP from "../assets/Marcio.png"
import Danones from "../assets/Benones.png"
import Wexley from "../assets/Wesley.png"
import { CylinderContainer3 } from './Agradecimentos.styles'
import { CylinderContainer4 } from "./Agradecimentos.styles"
import { BarraContainer } from "./Barra.styles"
import { Link } from "react-router-dom"

import Menu from "../components/Menu"

export function Agradecimentos() {
  return (
    <section>
        <BarraContainer>
          <header>
            <h1>Agradecimentos</h1>
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

          <CylinderContainer3>
          <div>
            <h2>Plínio</h2>
            <img src={Plipli} alt="" />
          </div>
          </CylinderContainer3>
         <CylinderContainer4>
        <div>
          <img src={TDP} alt="" />
          <h2>Márcio</h2>
        </div>
        </CylinderContainer4>
          <CylinderContainer3>
          <div>
            <h2>Benones</h2>
            <img src={Danones} alt="" />
          </div>
          </CylinderContainer3>
        <CylinderContainer4>
        <div>
          <img src={Wexley} alt="" />
          <h2>Wesley</h2>
        </div>
        </CylinderContainer4>
    </section>
  )
}
