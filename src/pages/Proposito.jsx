import seg from '../assets/seguranca.svg'
import mao from '../assets/mao.svg'
import nuvem from '../assets/nuvem.svg'

export default function Proposito() {
  return (
    <section>
        <header>
            <h1>Propósitos</h1>
        </header>

        <div>
            <h2>SEGURANÇA</h2>
            <p>A área da segurança é pouca explorada nos projetos de TCC. Decidimos dar ênfase a ela, por meio da criação da Smart Lock que contém muitos requisitos e barreiras de seguranças vitais para o consumidor.</p>
            <img src={seg} alt="escudo simbolizando segurança" />
        </div>

        <div>
            <h2>ACESSIBILIDADE</h2>
            <p>Nossos conceitos e idéias sempre levam ao um único denominador comum: custo-benefício é o que prezamos. Buscamos entregar um produto com a mais alta tecnologia para pessoas que normalmente não conseguiriam adquirir.</p>
            <img src={mao} alt="maozinha" />
        </div>

        <div>
            <h2>INTEGRAÇÕES</h2>
            <p>Um quesito obrigatório, aliado importante para o andamento e funcionamento total da Smart Lock, já que o uso do Wi-fi e o do SMS será um agente essencial e indispensável para o decorrer do processo, sendo eles, o aplicativo e as conexões via wi-fi.</p>
            <img src={nuvem} alt="Nuvemzinha" />
        </div>

    </section>
  )
}
