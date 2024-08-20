import styled from "styled-components"

export const CardContainer2 = styled.div `
    div {
        background: ${props => props.theme.barraBackground};
        color: ${props => props.theme.white};
        margin-inline: 2vh;
        padding: 1.2vh;
        border-radius: 2vh 2vh 0vh 0vh;
        text-align: justify;
        h2 {
            color: ${props => props.theme.background};
            margin-block: 2vh;
            text-align: center;
        }
        p {
            margin-bottom: 1vh;
            margin-inline: 2vh;
            line-height: 2vh;
        }
        @media (min-width: 768px) {
            border-radius: 2vh;
            width: 50vh;
            padding: 3vh;
            height: 100%;
            p {
                margin-block: 1vh;
                margin-inline: 1.5vh;
                line-height: 3vh;
                font-size: 14px;
            }
        }
    }
`

export const CardContainer3 = styled.div `
    div {
        background: ${props => props.theme.barraBackground};
        color: ${props => props.theme.white};
        margin-inline: 2vh;
        padding: 1.2vh;
        border-radius: 0vh 0vh 2vh 2vh;
        text-align: justify;
        h2 {
            color: ${props => props.theme.background};
            margin-block: 2vh;
            text-align: center;
        }
        p {
            margin-bottom: 1vh;
            margin-inline: 2vh;
            line-height: 2vh;
        }
        @media (min-width: 768px) {
            height: 100%;
            width: auto;
            margin: 0% 5% 2% 5%;
            border-radius: 2vh;
            padding: 3vh;
            p {
                margin-block: 1.5vh;
                margin-inline: 1.5vh;
                line-height: 3vh;
                font-size: 14px;
            }
        }
    }
`


export const ImageBox = styled.div`
    background: ${props => props.theme.boxColor};
    color: ${props => props.theme.containerText};
    margin: 0% 5% 5% 5%;
    text-align: center;
    padding: 25%;
    border-radius: 2vh;
    @media (min-width: 768px) {
        display: none;
    }
`
export const ImageBox2 = styled.div`
    div {
        background: ${props => props.theme.boxColor};
        color: ${props => props.theme.containerText};
        display: flex;
        text-align: center;
        padding: 22%;
        border-radius: 2vh;
        display: none;
        @media (min-width: 768px) {
            display: block;
            margin: 1% 5% 0% 5%;
        }
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        p{
            color: ${props => props.theme.projetoText};
        }
    }
`
export const CardImage = styled.div `
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 55%;
        height: 98%;
    }

`