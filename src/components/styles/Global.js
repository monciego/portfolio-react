import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body {
        font-size: 100%;
        font-family: ${({ theme }) => theme.fonts.montserrat}
    }

    img {
        min-width: 100%;
        object-fit: cover;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    section{
        height: 100vh;
    }

    section h1{
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 100vh;
    }
`;

export default GlobalStyles;
