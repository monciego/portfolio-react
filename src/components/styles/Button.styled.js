import styled from "styled-components";
import { Link as Button } from "react-scroll";

export const StyledButton = styled(Button)`
  box-shadow: none !important;
  border-radius: 3px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
  padding: 0 40px;
  outline: none !important;
  overflow: hidden;
  display: inline-block;
  position: relative;
  letter-spacing: 0.5px;
  border: 0;
  cursor: pointer;

  background: ${(props) => (props.secondary ? "#4353ff" : "#e64e04")};

  &::before {
    content: ${(props) => `url(${props.icon})`};
    font: 15px/1.2em font;
    color: #fff;
    position: absolute;
    height: 100%;
    right: 25px;
    top: 50%;
    margin-top: -9px;
    transition: all 0.3s;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
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
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
`;
