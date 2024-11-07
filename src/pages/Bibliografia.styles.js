import styled from "styled-components"

export const BioContainer = styled.div`
    background: ${props => props.theme.blue};
    color: ${props => props.theme.black};
    font-size: 16px;
    margin: 8%;
    padding: 5%;
    text-align: justify;
    border-radius: 2vh;
    margin-top: 0;
    margin-bottom: 0;
`

export const BioResponsivity = styled.div`
    display: flex;
    @media (min-width: 768px) {
        margin-top: 5%;
    }
`