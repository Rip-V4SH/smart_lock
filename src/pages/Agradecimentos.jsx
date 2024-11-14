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
import { IconContainer } from "./Icon.styles";
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
          <h1>AGRADECIMENTOS</h1>
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
