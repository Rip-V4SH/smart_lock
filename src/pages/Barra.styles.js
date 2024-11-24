import styled from "styled-components"

export const BarraContainer = styled.div`
    color: ${props => props.theme.white};
    margin: 1vh 2vh 1vh 2vh;
    header {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    img {
        height: 40px;
        margin-top: 2%;
        margin-left: 1rem;
    }
    h1 {
        font-size: 3vh;
    }
    @media (min-width: 768px) {
        header {
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            /* justify-content:space-between; */
        }

        img {
            height: 40px;
        }

        h1 {
            font-size:50px;
            text-transform: uppercase;
        }
    }
`