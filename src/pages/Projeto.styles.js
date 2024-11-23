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
  margin-left: 5%;
  @media (min-width: 768px) {
    display: block;
    margin: 1% 5% 0% 5%;
    width: auto;
  }

  img {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      width: 30%;
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
`;

export const Cardinfos = styled.div`
  margin-inline: 5%;
  @media (min-width: 768px) {
    margin-inline: 0%;
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

export const CylinderContainer3 = styled.div`
    div {
        display: flex;
        background: ${props => props.theme.bluedgrey};
        align-items: center;
        width: 55%;
        border-top-right-radius: 10vh;
        border-bottom-right-radius: 10vh;
        border-left: none;
        h2 {
        color: ${props => props.theme.white};
        margin-block: 3vh;
        margin-left: auto;
        }
        img {
            height: 7vh;
            width: 7vh;
            margin: 1vh;
            border-radius: 50rem;
        }
        @media (min-width: 768px) {
            flex-direction: row-reverse;
            margin-left: 2vh;
            width: 50%;
            border-radius: 10vh;
            img {
                height: 12vh;
                width: 12vh;
                margin: 0.7vh;
                border-radius: 50rem;
            }
            h2 {
                margin-left: 0%;
                margin-right: auto;
                color: ${props => props.theme.white};
                font-size: 4vh;
            }
        }
    }
    
    
`;
