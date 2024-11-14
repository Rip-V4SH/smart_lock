import styled from "styled-components";

export const IconContainer = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 100%;
  }

  .hover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6); /* Fundo escuro semi-transparente */
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    opacity: 0; /* Esconde o texto inicialmente */
    transition: opacity 0.3s ease; /* Suaviza o aparecimento do texto */
    pointer-events: none;
  }

  &:hover .hover-text {
    opacity: 1; /* Mostra o texto ao passar o mouse */
  }
`;
