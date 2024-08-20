import { BarraContainer } from "./Barra.styles"
import config from '../assets/menu/config.svg'
import propositos from "../assets/menu/proposito.svg"
import componentes from '../assets/menu/componentes.svg'
import criadores from '../assets/menu/criadores.svg'
import agradecimentos from '../assets/menu/agradecimentos.svg'
import bio from '../assets/menu/bio.svg'
import { CardContainer2, CardContainer3, CardImage, ImageBox, ImageBox2, Main } from "./Projeto.styles"

import Menu from "../components/Menu"

export function Projeto() {
  return (
    <section>
      
      <BarraContainer>
        <header>
            <h1>Projeto</h1>
            <Menu />
          </header>
      </BarraContainer>
      <Main>
        <ImageBox>
          <div>
          <h3>Imagem</h3>
          </div>
        </ImageBox>
        <CardContainer2>
          <div>
            <p>O mercado está cada vez mais rápido e criando soluções práticas para as mais diversas situações do dia a dia do ser humano. Nesse contexto, percebe-se uma escassez de itens da segurança, sendo assim há a necessidade de um produto que habilite tanto a proteção, quanto ao acesso às residências.</p>
            <p>O nosso objetivo geral é melhorar a praticidade de acesso a residências justamente com um reforço de segurança.</p>
            <p>Monitoraremos o controle de pessoas que se aproximam da residência;</p>
            <p>Alertaremos o proprietário sobre um perigo a sua residência;</p>
            <p>Facilitaremos o cotidiano, automatizando o acesso a residência, que se repete ao longo do dia.</p>
          </div>
        </CardContainer2>
        <CardImage>
        <CardContainer3>
            <div>
              <h2>Aplicativo</h2>
              <p>Como já citado anteriormente, o aplicativo terá funções importantes, como a reprodução da imagem que a câmera trará, além de cadastro de digitais, suporte e intensidade do alarme.</p>
            </div>
          </CardContainer3>
          <ImageBox2>
            <div>
            <h3>Imagem</h3>
            </div>
          </ImageBox2>
        </CardImage>
        <img src="" alt="" />
      </Main>
    </section>
  )
}
