import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'

export default function Menu() {
  return (
    <div>

        <a href='/feedback'>
            <img src={config} alt="engrenagem" />
            <p>Feedback</p>
        </a>

        <a href='/proposito'>
            <img src={prop} alt="Propósito" />
            <p>Propósito</p>
        </a>

        <a href='/materiais'>
            <img src={comp} alt="Componentes" />
            <p>Componentes</p>
        </a>

        <a href='/agradecimentos'>
            <img src={agradece} alt="Agradecimentos" />
            <p>Agradecimentos</p>
        </a>
        
        <a href='/criadores'>
            <img src={cria} alt="Criadores" />
            <p>Criadores</p>
        </a>

        <a href='/projeto'>
            <img src={projeto} alt="projeto" />
            <p>projeto</p>
        </a>
        
        <a href='/bibliografia'>
            <img src={bio} alt="bibliografia" />
            <p>bibliografia</p>
        </a>

    </div>
  )
}
