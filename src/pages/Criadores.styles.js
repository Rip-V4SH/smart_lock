import styled from "styled-components"

export const CardsResponsivity = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10vh;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }
`

export const CardsContainer3 = styled.div`
    div {
        background: ${props => props.theme.barraBackground};
        color: ${props => props.theme.white};
        padding: 2%;
        width: 40%;
        margin: 0vh 2vh 0vh 2vh;
        text-align: center;
        border-radius: 2vh;
        img {
            width: 70%;
            height: 70%;
            margin: 1vh;
        }
        a {
            color: ${props => props.theme.background};
        }
        h2 {
            background-color: ${props => props.theme.backgroundIcons};
            color: ${props => props.theme.containerText};
            border-radius: 5vh;
        }
        @media (min-width: 768px) {
            width: 45vh;
            height: 50vh;
        h2 {
            margin-bottom: 2vh;
            margin-inline: 10%;
        }
        }
    }
`