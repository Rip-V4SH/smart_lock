import styled from "styled-components"

export const CardContainer = styled.div`
    div {
        background: ${props => props.theme.blue};
        color: ${props => props.theme.black};
        padding: 5%;
        margin: 10%;
        text-align: center;
        border-radius: 2vh;
        p {
            margin-top: 2vh;
            text-align: justify;
        }
        @media(min-width: 768px) {
            height: 60vh;
            width: 25vh;
            margin-inline: 2vh; 
            margin: 0%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10%;
            padding-top: 2%;
            width: auto;
            height: 100%;
            h2 {
                font-size: 30px;
            }
            p {
                font-size: 20px;
                margin-bottom: 10rem;
            }
            img {
                height: 70px;
                width: 70px;
                margin: 20%;
            }

        }
        @media(min-width: 1024px) {
            height: 60vh;
            width: 30vh;
            margin-inline: 5vh;
        }
    }
`
export const DivCards = styled.div`
    @media(min-width: 768px) {
        display: flex;
        justify-content: center;
        align-content: center;
    }
`
export const BarraContainer = styled.div`
    background: ${props => props.theme.barraBackground};
    color: ${props => props.theme.containerText};
    text-align: center;
    padding: 2vh;
    font-size: 16px;
    img {
        height: 4vh;
        margin-top: 2%;
        margin-inline: 5.5%;
        gap: 6rem;
        padding-inline: 5%;
    }
`