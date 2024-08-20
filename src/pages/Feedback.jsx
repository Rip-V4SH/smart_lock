import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import perfil from "../assets/materiais/perfil.svg"
import { BarraContainer, ProfileImage } from "./Feedback.styles";
import { CardContainer4, FeedbackContainer, UsuariosContainer, Main } from './Feedback.styles'

import Menu from "../components/Menu"

export function Feedback() {
  return (
    <section>
        <BarraContainer>
          <div>
            <h1>Configurações</h1>

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
          <ProfileImage>
            <img src={perfil} alt="" />
          </ProfileImage>
        </BarraContainer>
        <Main>
          <CardContainer4>
            <div>
              <img src={perfil} alt="" />
              <UsuariosContainer>
                <h1>Senha:</h1>
                <h1>Conta:</h1>
                <h1>Data:</h1>
                <h1>Telefone:</h1>
              </UsuariosContainer>
            </div>
          </CardContainer4>
          <FeedbackContainer>
            <div>
            <h1>Feedback</h1>
            <h2>Escreva sua opinião sobre o site:</h2>
            <p>Deixe sua crítica construtiva, seu apoio, sua sugestão para que possamos melhorar!</p>
            <input type="text" placeholder='Digite aqui...'/>
            <button>enviar</button>
            </div>
          </FeedbackContainer>
        </Main>
    </section>
  )
}
