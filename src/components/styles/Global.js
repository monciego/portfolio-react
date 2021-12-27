import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 100%;
        font-family: ${({ theme }) => theme.fonts.montserrat}
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
