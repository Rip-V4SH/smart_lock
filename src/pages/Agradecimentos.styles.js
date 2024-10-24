import styled from "styled-components"

export const CylinderContainer3 = styled.div`
    div {
        display: flex;
        background: ${props => props.theme.blue};
        border: 1.2vh solid ${props => props.theme.darkblue};
        align-items: center;
        width: 55%;
        border-top-right-radius: 10vh;
        border-bottom-right-radius: 10vh;
        border-left: none;
        h2 {
        color: ${props => props.theme.black};
        margin-block: 3vh;
        margin-left: auto;
        }
        img {
            height: 7vh;
            width: 7vh;
            margin: 1vh;
        }
        @media (min-width: 768px) {
            flex-direction: row-reverse;
            margin-left: 2vh;
            width: 50%;
            border: 1.2vh solid ${props => props.theme.darkblue};
            border-radius: 10vh;
            img {
                height: 12vh;
                width: 12vh;
                margin: 0.7vh;
            }
            h2 {
                margin-left: 0%;
                margin-right: auto;
                color: ${props => props.theme.black};
                font-size: 4vh;
            }
        }
    }
    
    
`

export const CylinderContainer4 = styled.div `
    div {
        display: flex;
        background: ${props => props.theme.blue};
        border: 1.2vh solid ${props => props.theme.darkblue};
        align-items: center;
        width: 55%;
        margin-left: 45%;
        margin-block: 5vh;
        border-top-left-radius: 10vh;
        border-bottom-left-radius: 10vh;
        border-right: none;
        h2 {
            color: ${props => props.theme.black};
            margin-block: 3vh;
            margin-right: auto;
        }
        img {
            height: 7vh;
            width: 7vh;
            margin: 1vh;
        }
        @media (min-width: 768px) {
            flex-direction: row-reverse;
            margin-right: 2vh;
            width: 50%;
            margin-left: 48%;
            border: 1.2vh solid ${props => props.theme.darkblue};
            border-radius: 10vh;
            img {
                height: 12vh;
                width: 12vh;
                margin: 0.7vh;
            }
            h2 {
                margin-left: auto;
                margin-right: 0%;
                color: ${props => props.theme.black};
                font-size: 4vh;
            }
        }
    }
    
`