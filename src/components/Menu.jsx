import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/game.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import {BarraContainer} from '../pages/Barra.styles'

export default function Menu() {
  return (
    <BarraContainer>
        <div>
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
            
            <a href='/criadores'>
                <img src={cria} alt="Criadores" />
            </a>

            <a href='/projeto'>
                <img src={projeto} alt="projeto" />
            </a>
            
            <a href='/bibliografia'>
                <img src={bio} alt="bibliografia" />
            </a>
        </div>
    </BarraContainer>
  )
}
