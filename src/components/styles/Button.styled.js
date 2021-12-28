import styled from "styled-components";
import { Link as Button } from "react-scroll";

export const StyledButton = styled(Button)`
  box-shadow: none !important;
  border-radius: 0.1875rem;
  font-weight: 500;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.9375em;
  text-transform: uppercase;
  color: #fff;
  padding: 0 2.5rem;
  outline: none !important;
  overflow: hidden;
  display: inline-block;
  position: relative;
  letter-spacing: 0.03125rem;
  border: 0;
  cursor: pointer;

  background: ${(props) => (props.secondary ? "#4353ff" : "#e64e04")};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85em;
    padding: 0 2.1875rem;
  }

  &::before {
    content: ${(props) => `url(${props.icon})`};
    font: 0.9375rem/1.2em font;
    color: #fff;
    position: absolute;
    height: 100%;
    right: 1.5625rem;
    top: 50%;
    margin-top: -0.5625rem;
    transition: all 0.3s;
    opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
    -webkit-transform: translateX(-1.25);
    transform: translateX(-1.25);
  }

  &:hover:before {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  & span {
    position: relative;
    display: block;
    transition: all 0.3s;
  }

  &:hover span {
    -webkit-transform: translateX(-0.625rem);
    transform: translateX(-0.625rem);
  }
`;
