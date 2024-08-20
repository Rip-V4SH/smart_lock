import image from "../assets/materiais/image.svg"
import config from '../assets/menu/config.svg'
import prop from "../assets/menu/proposito.svg"
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import { CylinderContainer3 } from './Agradecimentos.styles'
import { CylinderContainer4 } from "./Agradecimentos.styles"
import { BarraContainer } from "./Barra.styles"

import Menu from "../components/Menu"

export function Agradecimentos() {
  return (
    <section>
        <BarraContainer>
          <header>
            <h1>Agradecimentos</h1>
            <a href='/feedback'>
                <img src={config} alt="engrenagem" />
            </a>

            <a href='/proposito'>
                <img src={prop} alt="Propósito" />
            </a>

            <a href='/materiais'>
                <img src={comp} alt="Componentes" />
            </a>
            
            <a href='/criadores'>
                <img src={cria} alt="Criadores" />
            </a>

            <a href='/projeto'>
                <img src={projeto} alt="projeto" />
            </a>
            
            <a href='/bibliografia'>
                <img src={bio} alt="bibliografia" />
            </a>
          </header>
        </BarraContainer>

          <CylinderContainer3>
          <div>
            <h2>Nome</h2>
            <img src={image} alt="" />
          </div>
          </CylinderContainer3>
         <CylinderContainer4>
        <div>
          <img src={image} alt="" />
          <h2>Nome</h2>
        </div>
        </CylinderContainer4>
          <CylinderContainer3>
          <div>
            <h2>Nome</h2>
            <img src={image} alt="" />
          </div>
          </CylinderContainer3>
        <CylinderContainer4>
        <div>
          <img src={image} alt="" />
          <h2>Nome</h2>
        </div>
        </CylinderContainer4>
    </section>
  )
}
