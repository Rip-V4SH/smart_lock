import styled from "styled-components"

export const CylinderContainer = styled.div`
    div {
        background: ${props => props.theme.containerText};
        display: flex;
        align-items: center;
        margin-block: 1vh;
        width: 55%;
        border-top-right-radius: 10vh;
        border-bottom-right-radius: 10vh;
        h2 {
            color: ${props => props.theme.white};
            margin-left: auto;
        }
        img {
            width: 9vh;
            height: 9vh;
            padding: 1vh;
            margin: 1vh;
        }
        @media (min-width:768px) {
            width:50%;
            img {
                width: 10vh;
                height: 10vh;
                padding: 2vh;
                background: #448DE3;
                border-radius: 50%;
            }
            h2 {
                margin-left: auto;
            }
        }
    }
`

export const CylinderContainer2 = styled.div`
    div {
        background: ${props => props.theme.containerText};
        display: flex;
        align-items: center;
        width: 55%;
        margin-left: 45%;
        border-top-left-radius: 10vh;
        border-bottom-left-radius: 10vh;
        h2 {
            color: ${props => props.theme.white};
        }
        img {
                width: 9vh;
                height: 9vh;
                padding: 1vh;
                margin: 1vh;
        }
        @media (min-width:768px) {
            width:50%;
            margin-left: 50%;
            img {
                width: 10vh;
                height: 10vh;
                padding: 2vh;
                margin: 1vh;
                background: #448DE3;
                border-radius: 50%;
            }
            h2 {
            }
        }
    }
`

export const BarraContainer2 = styled.div`
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
    @media (min-width: 768px) {
        h1 {
            font-size: 28px;
            padding: 2vh;
        }
    }
`