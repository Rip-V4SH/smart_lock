import styled from "styled-components"

export const CardContainer4 = styled.div`
    div {
        width: auto;
        height: auto;
        h1 {
            background: ${props => props.theme.barraBackground};
            color: ${props => props.theme.detailsText};
            padding: 2vh;
            margin: 1%;
            border-radius: 2vh;
            margin-bottom: 1.2vh;
        }
        img {
            margin-block: 2vh;
            margin-left: 80%
        }
        @media (min-width: 768px) {
            width: 40vh;
            margin-right: 5vh;
            img {
                display: none;
            }
        }
    }
`
export const FeedbackContainer = styled.div `
    background: ${props => props.theme.boxColor};
    margin: 3%;
    margin-block: 2vh;
    border-radius: 3vh;
    padding: 0.1vh;
    h1 {
        background: ${props => props.theme.barraBackground};
        color: ${props => props.theme.detailsText};
        padding: 0.5vh;
        margin: 3%;
        border-radius: 2vh;
        text-align: center;
    }
    h2 {
        color: ${props => props.theme.littleText};
        margin-inline: 5%;
    }
    p {
        color: ${props => props.theme.littleText};
        margin-inline: 5%;
        margin-block: 1vh;
    }
    input {
        background: ${props => props.theme.containerText};
        display: flex;
        width: 90%;
        margin-left: 5%;
        padding: 15%;
        border-radius: 2vh;
        border: none;
    }
    button {
        background: ${props => props.theme.containerText};
        color: ${props => props.theme.background};
        font-size: 2vh;
        margin-block: 2vh;
        margin: 5%;
        width: 90%;
        border: none;
        border-radius: 2vh;
        padding: 1vh;
        &:hover,
        &:focus {
        background: ${props => props.theme.background};
        color: ${props => props.theme.containerText};
        }
    }
    input::placeholder {
        color: ${props => props.theme.background};
        position: absolute;
        top: 0; 
        left: 0;
        font-size: 2.2vh;
    }
    a {
        margin-left: 90%;
    }
    @media (min-width: 768px) {
        width: 90vh;
        button {
        &:hover,
        &:focus {
        background: ${props => props.theme.background};
        color: ${props => props.theme.containerText};
        }
    }
`
export const UsuariosContainer = styled.div`
    background: ${props => props.theme.boxColor};
    border: 0.5vh solid ${props => props.theme.barraBackground};
    padding: 0.5vh;
    margin-inline: 1.5vh;
    border-radius: 2vh;
    a {
        color: ${props => props.theme.background};
        margin-top: -5.5vh;
    }
`
export const BarraContainer = styled.div`
    background: ${props => props.theme.barraBackground};
    color: ${props => props.theme.containerText};
    text-align: center;
    margin-bottom: 4vh;
    padding: 2vh;
    img {
        height: 4vh;
        margin-top: 2%;
        margin-inline: 1.5vh;
    }
    h1 {
        font-size: 3vh;
    }
    @media (min-width: 768px) {
        margin-bottom: 4vh;
        padding-top: 4vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;
        img {
            display: none; 
        }
        h1 {
            font-size:5vh;
            text-transform: uppercase;
            display: none;
        }
    }
`
export const ProfileImage = styled.div`
    img {
        display: none;
        @media (min-width: 768px) {
            display: block;
            width: 8vh;
            height: 8vh;
            margin: 0vh 1vh 0vh 1vh;
        }
    }
`
export const Main = styled.div`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`