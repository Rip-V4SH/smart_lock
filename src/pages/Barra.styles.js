import styled from "styled-components"

export const BarraContainer = styled.div`
    background: ${props => props.theme.barraBackground};
    color: ${props => props.theme.containerText};
    text-align: center;
    margin-bottom: 4vh;
    padding: 2vh;
    img {
        height: 4vh;
        margin-top: 2%;
        margin-inline: 2.2vh;
    }
    h1 {
        font-size: 3vh;
    }
    @media (min-width: 768px) {
        margin-bottom: 4vh;
        padding-top: 4vh;
        img {
            display: none; 
        }
        h1 {
            font-size:5vh;
            text-transform: uppercase;
        }
    }
`