import styled from "styled-components"

export const CardContainer = styled.div`
    div {
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.bluedgrey};
        color: ${props => props.theme.white};
        padding: 2rem;
        text-align: center;
        border-radius: 2vh;
        align-items: center;
        justify-content: center;
        p {
            margin-top: 2vh;
            text-align: justify;
        }
        img {
            height: 4rem;
            width: 4rem;
        }
        section {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            align-items: center;
        }
        @media(min-width: 768px) {
            
            img {
                height: 70px;
                width: 70px;
            }
            p {
                font-size: 1.2rem;
                line-height: 1.5rem;
            }

        }
        @media(min-width: 1024px) {
            margin-top: 2rem;
            height: 30vh;
            width: 120vh;
        }
    }
`
export const DivCards = styled.div`
    div {
        display: flex;
        margin-inline: 3%;
        margin-bottom: 2rem;
    }
    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin-inline: 15%;
        gap: 2rem;
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