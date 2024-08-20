import seg from '../assets/seguranca.svg'
import mao from '../assets/mao.svg'
import nuvem from '../assets/nuvem.svg'
import config from '../assets/menu/config.svg'
import projeto from '../assets/menu/projeto.svg'
import componentes from '../assets/menu/componentes.svg'
import criadores from '../assets/menu/criadores.svg'
import agradecimentos from '../assets/menu/agradecimentos.svg'
import { CardContainer, DivCards } from './Proposito.styles'
import { BarraContainer} from './Barra.styles'

export function Proposito() {
  return (
    <section>
        <BarraContainer>
        <header>
            <h1>Projeto</h1>
            <img src={config} alt="" />
            <img src={projeto} alt="" />
            <img src={componentes} alt="" />
            <img src={agradecimentos} alt="" />
            <img src={criadores} alt="" />
        </header>
        </BarraContainer>
        <DivCards>
            <CardContainer>
            <div>
                <h2>SEGURANÇA</h2>
                <p>A área da segurança é pouca explorada nos projetos de TCC. Decidimos dar ênfase a ela, por meio da criação da Smart Lock que contém muitos requisitos e barreiras de seguranças vitais para o consumidor.</p>
                <img src={seg} alt="escudo simbolizando segurança" />
            </div>
            </CardContainer>
            <CardContainer>
            <div>
                <h2>ACESSIBILIDADE</h2>
                <p>Nossos conceitos e idéias sempre levam ao um único denominador comum: custo-benefício é o que prezamos. Buscamos entregar um produto com a mais alta tecnologia para pessoas que normalmente não conseguiriam adquirir.</p>
                <img src={mao} alt="maozinha" />
            </div>
            </CardContainer>
            <CardContainer>
            <div>
                <h2>INTEGRAÇÕES</h2>
                <p>Um quesito obrigatório, aliado importante para o andamento e funcionamento total da Smart Lock, já que o uso do Wi-fi e o do SMS será um agente essencial e indispensável para o decorrer do processo, sendo eles, o aplicativo e as conexões via wi-fi.</p>
                <img src={nuvem} alt="Nuvemzinha" />
            </div>
            </CardContainer>
        </DivCards>
    </section>
  )
}
