import styled from "styled-components"

export const BarraContainer = styled.div`
    color: ${props => props.theme.white};
    margin-bottom: 4vh;
    margin-right: 1rem;
    header {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 4vh;
        margin-top: 2%;
        margin-inline: 1.2vh;
    }
    h1 {
        font-size: 3vh;
    }
    @media (min-width: 768px) {
        header {
            margin-bottom: 4vh;
            display: flex;
            flex-direction:row;
            align-items: center;
            justify-content:space-between;
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