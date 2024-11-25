import styled from "styled-components"

export const BioContainer = styled.div`
    background: ${props => props.theme.bluedgrey};
    color: ${props => props.theme.white};
    font-size: 16px;
    margin: 8%;
    padding: 5%;
    text-align: justify;
    border-radius: 2vh;
    margin-top: 0;
    margin-bottom: 0;

    a{
        color: ${props => props.theme.white};
    }
`

export const BioResponsivity = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    
    video {
        margin-top: 2rem;
        width: 100%;
        border-radius: 1rem;
    }
    @media (min-width: 768px) {
        margin-top: 5%;
    }
`