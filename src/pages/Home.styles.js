import styled from "styled-components"

export const ImageBackground = styled.div`
    background: ${props => props.theme.black};
    padding: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 50vh;
        width: 50vh;
    }
`