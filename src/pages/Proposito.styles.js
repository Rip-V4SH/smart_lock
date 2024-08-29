import styled from "styled-components"

export const CardContainer = styled.div`
    div {
        background: ${props => props.theme.containerText};
        color: ${props => props.theme.white};
        padding: 5%;
        margin: 10%;
        text-align: center;
        border-radius: 2vh;
        img {
            height: 5vh;
            width: 5vh;
            margin-left: 87%;
            margin-top: 2vh;
        }
        p {
            margin-top: 2vh;
            text-align: justify;
        }
        @media(min-width: 768px) {
            height: 60vh;
            width: 25vh;
            margin-inline: 2vh;
            h2 {
                font-size: 22px;
            }
            p {
                font-size: 16px;
            }
            img {
                width: 8vh;
                height: 8vh;
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
    }
`