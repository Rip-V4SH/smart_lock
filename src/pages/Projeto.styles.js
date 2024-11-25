import styled from "styled-components";

export const CardContainer2 = styled.div`
  div {
    background: ${props => props.theme.bluedgrey};
    color: ${props => props.theme.white};
    padding: 1.2vh;
    border-radius: 2vh 2vh 0vh 0vh;
    text-align: justify;
    h2 {
      color: ${props => props.theme.white};
      margin-block: 1vh;
      text-align: center;
      font-size: 26px;
    }
    p {
      color: ${props => props.theme.white};
      margin-bottom: 1vh;
    }
    @media (min-width: 768px) {
      border-radius: 2vh;
      width: auto;
      height: 100%;
      p {
        font-size: 16px;
      }
    }
  }
`;

export const CardContainer3 = styled.div`
  div {
    background: ${props => props.theme.bluedgrey};
    color: ${props => props.theme.white};
    padding: 1.2vh;
    border-radius: 0vh 0vh 2vh 2vh;
    text-align: justify;
    margin-bottom: 1rem;
    h2 {
      color: ${props => props.theme.white};
      margin-block: 1vh;
      text-align: center;
      font-size: 26px;
    }
    p {
      color: ${props => props.theme.white};
      margin-bottom: 1vh;
    }
    @media (min-width: 768px) {
      height: 100%;
      width: 50vh;
      border-radius: 2vh;
      p {
        font-size: 16px;
      }
    }
  }
`;

export const ImageBox2 = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1vh;
    width: 100%;
  }
  @media (min-width: 768px) {
    height: 100%;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 20vh;
    @media (min-width: 768px) {
      height: 40vh;
      width: 30vh;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    p {
      color: ${props => props.theme.projetoText};
    }
  } 
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;
    margin-inline: 5%;
    gap: 2rem;
    @media (min-width: 768px) {
      margin-inline: 0%;
      justify-content: center;
      padding-inline: 5%;
      gap: 2rem;
      margin-inline: 0;
    }
  }
`;

export const Creditos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2vh;

    section {
      display: flex;
      flex-direction: row;
    }
    @media (min-width: 768px) {
      display: none;
      width: 100%;
      flex-direction: row;
      gap: 0;
    }
`
export const Creditos2 = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  gap: 2vh;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`

export const Cardinfos = styled.div`
  margin-inline: 5%;
  @media (min-width: 768px) {
    margin-inline: 0;
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    padding-inline: 5%;
    gap: 2rem;
    line-height: 1.5;

    div {
      width: 100%;
    }
  }
`;

export const CylinderContainer5 = styled.div`
  width: 100%;
  div {
    display: flex;
    flex-direction: row-reverse;
    background: ${props => props.theme.bluedgrey};
    align-items: center;
    width: 100%;
    border-radius: 10vh;
    border-left: none;
    h2 {
      color: ${props => props.theme.white};
      margin-block: 2vh;
      margin-right: auto;
    }
    img {
      height: 6vh;
      width: 6vh;
      margin: 1vh;
      border-radius: 50rem;
    }
    @media (min-width: 768px) {
      flex-direction: row-reverse;
      width: 100%;
      border-radius: 10vh;
      min-width: 5rem;
      img {
        height: 6vh;
        width: 6vh;
        margin: 1vh;
        border-radius: 50rem;
      }
      h2 {
        font-size: 2vh;
        margin-block: 1vh;
      }
    }
  }
  @media (min-width: 768px) {
    width: 100%;
  }
    
    
`;
