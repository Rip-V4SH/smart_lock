import styled from "styled-components";

export const CardContainer2 = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    video {
      width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
  padding-inline: 5%;
  margin-bottom: 2rem;
  
  div {
    display: flex;
    flex-direction: row;
    gap: 1vh;
    width: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
    }
  }

  video {
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
      border-radius: 2rem;
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
    gap: 2vh;
    padding-inline: 5%;
  }

  @media (min-width: 768px) {
    display: none;
    width: 100%;
    flex-direction: row;
    gap: 0;
  }
`;

export const Creditos2 = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  gap: 2vh;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-inline: 5%;
  }
`;

export const Cardinfos = styled.div`
  margin-inline: 5%;
  margin-bottom: 2vh;
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
      height: auto;
      video {
      width: 40%;
      @media (min-width: 768px) {
        width: 80%;
      }
  }
    }
  }
`;

export const CylinderContainer5 = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  h2 {
    margin-bottom: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background-color: #0056b3;
    }
  }
`;