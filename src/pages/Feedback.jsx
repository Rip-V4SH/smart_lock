import config from '../assets/menu/config.svg'
import prop from '../assets/menu/proposito.svg'
import comp from '../assets/menu/componentes.svg'
import cria from '../assets/menu/criadores.svg'
import agradece from '../assets/menu/agradecimentos.svg'
import projeto from '../assets/menu/projeto.svg'
import bio from '../assets/menu/bio.svg'
import { BarraContainer } from "./Barra.styles";
import perfil from "../assets/materiais/perfil.svg"
import { ProfileImage } from "./Feedback.styles";
import React, { useState, useEffect } from 'react'
import { CardContainer4, FeedbackContainer, UsuariosContainer, Main } from './Feedback.styles'
import { Link } from 'react-router-dom'

export function Feedback() {
    // Função para carregar o tema do localStorage
    const loadTheme = () => {
        return localStorage.getItem('escuro') === 'true';
    };

    // Estado do tema (escuro ou claro) inicializado com o valor salvo no localStorage
    const [escuro, setEscuro] = useState(loadTheme());

    // Efeito para salvar o tema no localStorage sempre que ele mudar
    useEffect(() => {
        localStorage.setItem('escuro', escuro);
    }, [escuro]);

    return (
        <section style={{ backgroundColor: escuro ? "#011638" : "", color: escuro ? "white" : "black" }}>
            <BarraContainer>
                <header>
                    <h1 style={{ backgroundColor: escuro ? "#011638" : "", color: escuro ? "white" : "black" }}>Referências bibliográficas</h1>
                    <div className="icons"> 
                        <Link to='/feedback'><img src={config} alt="engrenagem" /></Link>
                        <Link to='/projeto'><img src={projeto} alt="projeto" /></Link>
                        <Link to='/proposito'><img src={prop} alt="Propósito" /></Link>
                        <Link to='/materiais'><img src={comp} alt="Componentes" /></Link>
                        <Link to='/agradecimentos'><img src={agradece} alt="Agradecimentos" /></Link>
                        <Link to='/criadores'><img src={cria} alt="Criadores" /></Link>
                        <Link to='/bibliografia'><img src={bio} alt="bibliografia" /></Link>
                    </div>
                </header>
            </BarraContainer>
            <div>
                <CardContainer4>
                    <button className='darkmode' onClick={() => setEscuro(prev => !prev)}>
                        Alternar Modo
                    </button>
                </CardContainer4>
                <Main>
                    <FeedbackContainer style={{ backgroundColor: escuro ? "#364156" : "", color: escuro ? "white" : "black" }}>
                        <div>
                            <h1 style={{ backgroundColor: escuro ? "#364156" : "", color: escuro ? "white" : "black" }}>Feedback</h1>
                            <h2 style={{ backgroundColor: escuro ? "#364156" : "", color: escuro ? "white" : "black" }}>Escreva sua opinião sobre o site:</h2>
                            <p style={{ backgroundColor: escuro ? "#364156" : "", color: escuro ? "white" : "black" }}>Deixe sua crítica construtiva, seu apoio, sua sugestão para que possamos melhorar!</p>
                            <input style={{ backgroundColor: escuro ? "#011638" : "#FFFFFF", color: escuro ? "black" : "white" }} type="text" placeholder ='Digite aqui...' />
                            <button style={{ backgroundColor: escuro ? "#011638" : "", color: escuro ? "white" : "black" }}>Enviar</button>
                        </div>
                    </FeedbackContainer>
                </Main>
            </div>
        </section>
    )
}
