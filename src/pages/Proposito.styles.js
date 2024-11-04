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
        img {
            height: 5rem;
            width: 5rem;
            margin-top: 1rem;
        }
        @media(min-width: 768px) {
            
            img {
                margin-top: 6rem;
                height: 70px;
                width: 70px;
            }
            p {
                font-size: 1.2rem;
            }

        }
        @media(min-width: 1024px) {
            height: 70vh;
            width: 40vh;
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