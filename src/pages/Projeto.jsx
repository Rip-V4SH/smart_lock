import { BarraContainer } from "./Barra.styles";
import config from '../assets/menu/config.svg';
import prop from '../assets/menu/proposito.svg';
import comp from '../assets/menu/componentes.svg';
import cria from '../assets/menu/criadores.svg';
import agradece from '../assets/menu/agradecimentos.svg';
import projeto from '../assets/menu/projeto.svg';
import bio from '../assets/menu/bio.svg';
import { IconContainer } from "./Icon.styles";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { CardContainer2, Cardinfos, CardContainer3, ImageBox2, Main } from "./Projeto.styles";
import smartLock from '../assets/smart-lock.jpg';

export function Projeto() {
  return (
    <section>
      <BarraContainer>
        <header>
          <h1>SMART LOCK</h1>
          <div className="icons">
            <Link to='/feedback'>
              <IconContainer>
                <img src={config} alt="engrenagem" />
                <div className="hover-text">Feedback</div>
              </IconContainer>
            </Link>
            <Link to='/projeto'>
              <IconContainer>
                <img src={projeto} alt="projeto" />
                <div className="hover-text">Projeto</div>
              </IconContainer>
            </Link>
            <Link to='/proposito'>
              <IconContainer>
                <img src={prop} alt="Propósito" />
                <div className="hover-text">Propósito</div>
              </IconContainer>
            </Link>
            <Link to='/materiais'>
              <IconContainer>
                <img src={comp} alt="Componentes" />
                <div className="hover-text">Componentes</div>
              </IconContainer>
            </Link>
            <Link to='/agradecimentos'>
              <IconContainer>
                <img src={agradece} alt="Agradecimentos" />
                <div className="hover-text">Agradecimentos</div>
              </IconContainer>
            </Link>
            <Link to='/criadores'>
              <IconContainer>
                <img src={cria} alt="Criadores" />
                <div className="hover-text">Criadores</div>
              </IconContainer>
            </Link>
            <Link to='/bibliografia'>
              <IconContainer>
                <img src={bio} alt="Bibliografia" />
                <div className="hover-text">Bibliografia</div>
              </IconContainer>
            </Link>
          </div>
        </header>
      </BarraContainer>
      <Main>
        <Cardinfos>
          <CardContainer2>
            <div>
              <p>Com a nossa maçaneta com leitor biométrico, você traz segurança para sua casa sem comprometer o seu orçamento. Com ela, você terá:</p>
              <p>Controle total sobre quem entra e sai;</p>
              <p>Um alarme que avisa diretamente no seu aplicativo, além de comunicar situações de emergência;</p>
              <p>Facilidade de acesso no seu dia a dia, tornando a rotina mais prática e segura.</p>
            </div>
          </CardContainer2>
          <CardContainer3>
            <div>
              <h2>Aplicativo</h2>
              <p>Nosso aplicativo garante a segurança da sua casa com recursos essenciais: você pode ligar diretamente para a emergência, o alarme é ativado em tentativas de invasão e o sistema detecta presenças suspeitas. Com ele, a proteção da sua residência está sempre ao seu alcance!</p>
            </div>
          </CardContainer3>
        </Cardinfos>
        <ImageBox2>
          <div>
            <img src={smartLock} alt="Smart Lock" />
          </div>
        </ImageBox2>
      </Main>
    </section>
  );
}
