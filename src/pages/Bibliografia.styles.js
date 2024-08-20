import styled from "styled-components"

export const BioContainer = styled.div`
    background: ${props => props.theme.barraBackground};
    color: ${props => props.theme.background};
    margin: 8%;
    padding: 5%;
    text-align: justify;
    border-radius: 2vh;
    margin-top: 0;
    p {
        margin-bottom: 2vh;
    }
`

export const BioResponsivity = styled.div`
    display: flex;
    @media (min-width: 768px) {
        margin-top: 5%;
    }
`