import { BarraContainer } from "./Barra.styles"
import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
<<<<<<< HEAD
import { CardContainer2, CardContainer3, CardImage, ImageBox, ImageBox2, Main } from "./Projeto.styles"
import { Link } from "react-router-dom"
=======
import { Link } from "react-router-dom"
import { CardContainer2, CardContainer3, Cardinfos, ImageBox, ImageBox2, Main } from "./Projeto.styles"

>>>>>>> 2885fba (finalizando)
import Menu from "../components/Menu"

export function Projeto() {
  return (
    <section>
      
      <BarraContainer>
        <header>
            <h1>Projeto</h1>
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
            
            <Link to='/bibliografia'>
                <img src={bio} alt="bibliografia" />
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
      <Main>
        <ImageBox>
          <div>
          <h3>Imagem</h3>
          </div>
        </ImageBox>
        <Cardinfos>
          <CardContainer2>
            <div>
              <p>Nós trazemos segurança para sua casa com o melhor custo-beneficio, a nossa maçaneta tem leitor biometrico e camera. 
                Assim você terá: </p>
                <p>O controle de pessoas;</p>
                <p>Alarme que irá alertar no aplicativo, além de comunicar a emergencia;</p>
                <p>Facilidade com o acesso diario.</p>
            </div>
          </CardContainer2>
          <CardContainer3>
              <div>
                <h2>Aplicativo</h2>
                <p>O aplicativo  terá conexão Wi-Fi com o Smart Lock e será usado para:</p>
                <p>Cadastro de digitais;</p>
                <p>Monitoramento de camera 24 horas;</p>
                <p>Alarme;</p>
                <p>Personalização do led.</p>
              </div>
            </CardContainer3>
        </Cardinfos>
          <ImageBox2>
            <div>
            <h3>Imagem</h3>
            </div>
          </ImageBox2>
        <img src="" alt="" />
      </Main>
    </section>
  )
}
