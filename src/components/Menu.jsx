import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'

export default function Menu() {
  return (
    <div>

        <a>
            <img src={config} alt="configurações" />
            <p>configurações</p>
        </a>

        <a>
            <img src={prop} alt="Propósito" />
            <p>Propósito</p>
        </a>

        <a>
            <img src={comp} alt="Componentes" />
            <p>Componentes</p>
        </a>

        <a>
            <img src={agradece} alt="Agradecimentos" />
            <p>Agradecimentos</p>
        </a>
        
        <a>
            <img src={cria} alt="Criadores" />
            <p>Criadores</p>
        </a>

    </div>
  )
}
