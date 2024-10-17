import styled from "styled-components";

export const CylinderContainer = styled.div`
  div {
    background: ${props => props.theme.blue};
    display: flex;
    align-items: center;
    margin-block: 1vh;
    width: 55%;
    border-top-right-radius: 10vh;
    border-bottom-right-radius: 10vh;
    h2 {
      color: ${props => props.theme.black};
      margin-left: auto;
    }
    img {
      width: 9vh;
      height: 9vh;
      padding: 1vh;
      margin: 1vh;
    }
    @media (min-width: 768px) {
      width: 50%;
      img {
        width: 10vh;
        height: 10vh;
        padding: 2vh;
        background: ${props => props.theme.darkblue};
        border-radius: 50%;
      }
      h2 {
        margin-left: auto;
      }
    }
  }
`;

export const CylinderContainer2 = styled.div`
  div {
    background: ${props => props.theme.blue};
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 55%;
    margin-left: 45%; 
    border-top-left-radius: 10vh;
    border-bottom-left-radius: 10vh;
    
    img {
      order: 1; 
      width: 9vh;
      height: 9vh;
      padding: 1vh;
      margin-left: 2vh;
    }
    
    h2 {
      order: 2; 
      color: ${props => props.theme.black};
      margin-right: 2vh;
    }
    
    @media (min-width: 768px) {
      width: 50%;
      padding: 1vh;
      margin-left: 50%;
      
      img {
        width: 10vh;
        height: 10vh;
        padding: 2vh;
        margin-left: 0.5vh;
        background: ${props => props.theme.darkblue};
        border-radius: 50%;
      }
      
      h2 {
        margin-right: auto;
      }
    }
  }
`;



export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;
