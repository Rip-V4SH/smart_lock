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
        background: ${props => props.theme.white};
    }
    [data-theme="dark"] {
        h1, h2, p, a {
            color: ${props => props.theme.white};
        }
    }
    
    
`

