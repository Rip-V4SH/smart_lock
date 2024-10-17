import styled, { keyframes } from "styled-components";

// Animação de fade-in para a imagem
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* Move para baixo durante a transição */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Retorna à posição original */
  }
`;

export const ImageBackground = styled.div`
  background: ${props => props.theme.black};
  padding: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none; /* Remover o sublinhado do link */
  }

  img {
    height: 50vh;
    width: 50vh;
    position: relative; /* Para que a animação funcione corretamente */
    z-index: 1; /* Para manter a imagem acima do fundo */
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Transições suaves */
  }

  &.fade-in {
    animation: ${fadeIn} 0.5s forwards; /* Aplicando a animação de entrada */
  }
`;
