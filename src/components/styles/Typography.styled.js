import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${(props) => (props.dark ? "#2626237" : "#cccccc")};
  margin-bottom: 1rem;
  font-size: ${(props) => props.fontSize || "1.125rem"};
  letter-spacing: ${(props) => props.spacing};
  text-align: ${(props) => props.textAlign};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.fontSizeMobile || "0.9375rem"};
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.link};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;
