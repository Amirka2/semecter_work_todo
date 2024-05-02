import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Inter, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    button {
        cursor: pointer;
        background-color: unset;
        border: none;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    strong {
        font-weight: 600;
    }

    em {
        font-style: italic;
    }

    [type="checkbox"], [type="radio"] {
        padding: 0;
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    
    ul {
        all: unset;
    }
`
