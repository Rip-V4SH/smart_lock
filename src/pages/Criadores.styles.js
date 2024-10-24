import styled from "styled-components";

export const CardsResponsivity = styled.div`
  display: flex;
  flex-direction: column;
  width: 2rem;
  gap: 5vh;
  
  @media (min-width: 768px) {
    margin-inline: 0%;
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    padding-inline: 15%;
    gap: 2rem;
  }
`;

export const CardsContainer3 = styled.div`
  div {
    background: ${props => props.theme.barraBackground};
    color: ${props => props.theme.white};
    padding: 20%;
    width: 25vh;
    margin: 0vh 2vh 0vh 2vh;
    text-align: center;
    border-radius: 2vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      color: ${props => props.theme.background};
    }

    h2 {
      background-color: ${props => props.theme.white};
      color: ${props => props.theme.black};
      border-radius: 2rem;
      padding: 0.5rem;
    }

    button {
      border: 0;
      background: ${props => props.theme.barraBackground};
      border-radius: 2rem;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      margin: 0%;
      padding: 0%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;

      h2 {
        margin-bottom: 2vh;
      }

      img {
        width: 30vh;
        margin: 1vh;
      }
    }
  }
`;

export const ExpandableContent = styled.div`
  background-color: ${props => props.theme.boxColor};
  padding: 1rem;
  border-radius: 1rem;
  animation: expand 0.3s ease-in-out;
  overflow: hidden;
  width: 100%; 
  box-sizing: border-box;
  word-wrap: break-word; 
  text-align: left; 
  max-width: calc(25vh - 2rem);
  
  @keyframes expand {
    0% {
      max-height: 0;
      opacity: 0;
    }
    100% {
      max-height: 200px;
      opacity: 1;
    }
  }
`;
