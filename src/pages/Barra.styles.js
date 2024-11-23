import styled from "styled-components"

export const BarraContainer = styled.div`
    color: ${props => props.theme.white};
    margin-block: 2vh;
    header {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 4vh;
        margin-top: 2%;
        margin-inline: 0.4rem;
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
            margin-inline: 0.4rem;
        }

        h1 {
            font-size:50px;
            text-transform: uppercase;
            margin-left: 2rem;
        }
    }
`