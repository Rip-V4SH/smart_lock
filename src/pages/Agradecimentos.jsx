import image from "../assets/materiais/image.svg"
import config from '../assets/menu/config.svg'
import propositos from "../assets/menu/proposito.svg"
import componentes from '../assets/menu/componentes.svg'
import criadores from '../assets/menu/criadores.svg'
import agradecimentos from '../assets/menu/agradecimentos.svg'
import { CylinderContainer3 } from './Agradecimentos.styles'
import { CylinderContainer4 } from "./Agradecimentos.styles"
import { BarraContainer } from "./Barra.styles"

export function Agradecimentos() {
  return (
    <section>
        <BarraContainer>
          <header>
            <h1>Agradecimentos</h1>
            <img src={config} alt="" />
            <img src={propositos} alt="" />
            <img src={componentes} alt="" />
            <img src={agradecimentos} alt="" />
            <img src={criadores} alt="" />
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
