import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
}

    :root {
        font-size: 80%;
    }

    body {
        background: ${props => props.theme.OxfordBlue};
    }
    hr {
        margin-bottom: 2vh;
        color: ${props => props.theme.bluedgrey};
    }
`

