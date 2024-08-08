import config from '../assets/config.svg'
import prop from '../assets/proposito.svg'
import comp from '../assets/componentes.svg'
import cria from '../assets/criadores.svg'
import agradece from '../assets/agradecimentos.svg'
import projeto from '../assets/projeto.svg'

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
