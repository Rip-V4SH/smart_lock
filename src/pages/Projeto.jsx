import { BarraContainer } from "./Barra.styles";
import config from '../assets/menu/config.svg';
import prop from '../assets/menu/proposito.svg';
import comp from '../assets/menu/componentes.svg';
import cria from '../assets/menu/criadores.svg';
import agradece from '../assets/menu/agradecimentos.svg';
import projeto from '../assets/menu/projeto.svg';
import bio from '../assets/menu/bio.svg';
import smartLock from '../assets/smart-lock.jpg';
import { CardContainer2, Cardinfos, CardContainer3, ImageBox2, Main } from "./Projeto.styles";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { useTheme } from '../pages/Theme.Context';

export function Projeto() {
  const { escuro } = useTheme();  // Acesse o estado do tema

  return (
    <section style={{ backgroundColor: escuro ? "#011638" : "", color: escuro ? "white" : "black" }}>
      <BarraContainer>
        <header>
          <h1 style={{ color: escuro ? "white" : "black" }}>Projeto</h1>
          <div className="icons"> 
            <Link to='/feedback'>
              <img src={config} alt="engrenagem" />
            </Link>

            <Link to='/projeto'>
              <img src={projeto} alt="projeto" />
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
        </header>
      </BarraContainer>
      
      <Main>
        <Cardinfos>
          <CardContainer2 style={{ backgroundColor: escuro ? "#364156" : "", color: escuro ? "white" : "black" }}>
            <div>
              <p>Com a nossa maçaneta com leitor biométrico, você traz segurança para sua casa sem comprometer o seu orçamento. Com ela, você terá:</p>
              <p>Controle total sobre quem entra e sai;</p>
              <p>Um alarme que avisa diretamente no seu aplicativo, além de comunicar situações de emergência;</p>
              <p>Facilidade de acesso no seu dia a dia, tornando a rotina mais prática e segura.</p>
            </div>
          </CardContainer2>
          
          <CardContainer3 style={{ backgroundColor: escuro ? "#364156" : "", color: escuro ? "white" : "black" }}>
            <div>
              <h2 style={{ color: escuro ? "white" : "black" }}>Aplicativo</h2>
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
