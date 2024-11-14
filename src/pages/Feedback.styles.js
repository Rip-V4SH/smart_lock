import styled from "styled-components"

export const FeedbackContainer = styled.div`
    background: ${props => props.theme.bluedgrey};
    margin: 3%;
    margin-block: 2vh;
    border-radius: 3vh;
    padding: 0.1vh;
    h1 {
        color: ${props => props.theme.white};
        font-size: 24px;
        padding: 0.5vh;
        margin: 3%;
        border-radius: 2vh;
        text-align: center;
    }
    h2 {
        color: ${props => props.theme.white};
        margin-inline: 5%;
    }
    p {
        color: ${props => props.theme.white};
        font-size: 16px;
        margin-inline: 5%;
        margin-block: 1vh;
    }
    input {
        background: ${props => props.theme.OxfordBlue};
        color: ${props => props.theme.white};
        display: flex;
        width: 90%;
        padding-bottom: 45%;
        margin-left: 5%;
        border-radius: 1.2vh;
        border: none;
        outline: none;
        font-size: 2.2vh;
    }
    button {
        background: ${props => props.theme.OxfordBlue};
        color: ${props => props.theme.white};
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
        color: ${props => props.theme.white};
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
    color: ${props => props.theme.black};
    margin-bottom: 4vh;
    header {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 4vh;
        margin-top: 2%;
        margin-inline: 1.5vh;
    }
    h1 {
        font-size: 3vh;
    }

    button {
        display: none;
    }
    @media (min-width: 768px) {
        header {
            margin-bottom: 4vh;
            display: flex;
            flex-direction:row;
            align-items: center;
            justify-content:space-between;
        }

        button {
            display:block ;
        }

        img {
            height: 40px;
        }

        h1 {
            font-size:50px;
            text-transform: uppercase;
            margin-left: 2rem;
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