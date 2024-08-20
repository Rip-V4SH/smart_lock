import proposito from '../assets/menu/proposito.svg'
import projeto from '../assets/menu/projeto.svg'
import componentes from '../assets/menu/componentes.svg'
import criadores from '../assets/menu/criadores.svg'
import agradecimentos from '../assets/menu/agradecimentos.svg'
import perfil from "../assets/materiais/perfil.svg"
import bio from '../assets/menu/bio.svg'
import { BarraContainer, ProfileImage } from "./Feedback.styles";
import { CardContainer4, FeedbackContainer, UsuariosContainer, Main } from './Feedback.styles'


export function Feedback() {
  return (
    <section>
        <BarraContainer>
          <div>
            <h1>Configurações</h1>
            <img src={projeto} alt="" />
            <img src={proposito} alt="" />
            <img src={componentes} alt="" />
            <img src={agradecimentos} alt="" />
            <img src={criadores} alt="" />
            <img src={bio} alt="" />
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
