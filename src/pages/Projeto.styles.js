import styled from "styled-components"

export const CardContainer2 = styled.div `
    div {
        background: ${props => props.theme.blue};
        color: ${props => props.theme.white};
        padding: 1.2vh;
        border-radius: 2vh 2vh 0vh 0vh;
        text-align: justify;
        h2 {
            color: ${props => props.theme.black};
            margin-block: 2vh;
            text-align: center;
        }
        p {
            color: ${props => props.theme.black};
            margin-bottom: 1vh;
            margin-inline: 2vh;
        }
        @media (min-width: 768px) {
            border-radius: 2vh;
            width: auto;
            height: 100%;
            p {
                margin-block: 1vh;
                margin-inline: 1.5vh;
                font-size: 16px;
            }
        }
    }
`

export const CardContainer3 = styled.div `
    div {
        background: ${props => props.theme.blue};
        color: ${props => props.theme.white};
        padding: 1.2vh;
        border-radius: 0vh 0vh 2vh 2vh;
        text-align: justify;
        h2 {
            color: ${props => props.theme.black};
            margin-block: 1vh;
            text-align: center;
        }
        p {
            color: ${props => props.theme.black};
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
        padding: 15%;
        border-radius: 2vh;
        display: none;
        @media (min-width: 768px) {
            display: block;
            margin: 1% 5% 0% 5%;
            width: auto;
        }
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        p{
            color: ${props => props.theme.projetoText};
        }
    }
`
export const Cardinfos = styled.div `
    
    margin-inline: 5%;
    
    @media (min-width: 768px) {
        margin-inline: 0%;
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: space-between;
        padding-inline: 5%;
        gap: 2rem;

        div {
            width: 100%;
        }
    }

`