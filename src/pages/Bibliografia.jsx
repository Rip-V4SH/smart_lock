import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import { Link } from "react-router-dom"
import { BarraContainer } from "./Barra.styles"
import { BioContainer, BioResponsivity } from './Bibliografia.styles'
import { Link } from 'react-router-dom'

import Menu from "../components/Menu"

export default function Bibliografia() {
  return (
    <section>
        <BarraContainer>
        <header>
          <h1>Referências bibliográficas</h1>
<<<<<<< HEAD
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
            
            <Link to='/criadores'>
                <img src={cria} alt="Criadores" />
            </Link>

            <Link to='/projeto'>
                <img src={projeto} alt="projeto" />
            </Link>
=======
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
              
              <Link to='/criadores'>
                <img src={cria} alt="Criadores" />
              </Link>
              
              <Link to='/bibliografia'>
                <img src={bio} alt="bibliografia" />
              </Link>
            </div>
>>>>>>> 2885fba (finalizando)
        </header>
        </BarraContainer>
        <BioResponsivity>
        <BioContainer>
        <div>
            <p>
              A Segurança da Informação representa um campo essencial na proteção de dados e ativos críticos contra ameaças que visam acessos não autorizados, alterações indevidas ou a indisponibilidade das informações. Segundo definição da NBR ISO/IEC 17799, envolve a preservação dos atributos de confidencialidade, integridade e disponibilidade, assegurando não apenas a proteção dos dados, mas também a continuidade dos negócios e a maximização de oportunidades comerciais.
              Paralelamente, a automação residencial desponta como um atrativo significativo em novos empreendimentos imobiliários. Incorporadoras como Gafisa e Rodobens têm adotado essa tecnologia, permitindo que moradores controlem remotamente diversos aspectos de suas residências por meio da internet. Desde o acionamento de luzes, irrigação e controle de cortinas até a visualização de ambientes através de câmeras, a automação residencial não só aumenta o conforto, mas também reforça a segurança com sistemas integrados.
            </p>
            <p>
              A instalação de infraestrutura como cabeamento estruturado e fibra óptica não apenas viabiliza a automação, mas também suporta o crescimento do trabalho remoto. Nos Estados Unidos, onde 30% dos profissionais liberais já adotam o home office, essa infraestrutura facilita o acesso à internet de alta velocidade e a criação de intranets condominiais para serviços diversos, como reservas online e compras pela web.
              Um exemplo prático dessa integração tecnológica é o condomínio Tamboré 6, localizado na Grande São Paulo, onde a automação está presente em todas as suas 322 casas, oferecendo não apenas conforto, mas também eficiência energética e segurança reforçada. Com unidades de 160 m² a 320 m², o projeto reflete a tendência crescente de integração de tecnologias avançadas em empreendimentos residenciais.
              Além disso, a identificação biométrica por digital, tecnologia robusta e de baixo custo, tem sido amplamente adotada em sistemas de segurança, como fechaduras eletrônicas. A captura dos sulcos das mãos garante autenticidade e segurança, sendo utilizada isoladamente ou em conjunto com outras medidas de proteção.
            </p>
            <p>
              Assim, a convergência entre Segurança da Informação, automação residencial e avanços em tecnologias biométricas evidencia uma transformação no modo como interagimos com nossos espaços residenciais e profissionais. Estamos caminhando para um futuro onde a integração inteligente de sistemas não apenas aumenta a comodidade, mas também fortalece a proteção de dados e a eficiência dos ambientes que habitamos e trabalhamos.
            </p>
        </div>
        </BioContainer>
        </BioResponsivity>
    </section>
    
  )
}
