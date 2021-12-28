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
        padding: 6.6125rem 5rem 7.6125rem 5rem;
    }

`;

export default GlobalStyles;
