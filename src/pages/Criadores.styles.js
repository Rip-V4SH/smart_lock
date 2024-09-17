import styled from "styled-components"

export const CardsResponsivity = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 5vh;
    @media(min-width: 768px) {
        margin-inline: 0%;
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: space-between;
        padding-inline: 5%;
        gap: 2rem;
    }
`

export const CardsContainer3 = styled.div`
    div {
        background: ${props => props.theme.barraBackground};
        color: ${props => props.theme.white};
        padding: 2%;
        width: 25vh;
        height: auto;
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
                width: 18vh;
                margin: 1vh;
            }
        }
    }
`