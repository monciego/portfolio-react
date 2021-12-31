import styled from "styled-components";
import arrowUp from "../../assets//icons/icon-arrow-up.svg";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.tertiaryLight};
`;

export const FooterSmallTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSmallTitle = styled.span`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -6%;
    background: ${({ theme }) => theme.backgroundColor.orange};
    height: 5px;
    width: 5px;
    border-radius: 15px;
    transform: translate(-50%, -50%);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export const FooterBigLinkContainer = styled.div`
  text-align: center;
  margin: 3rem 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 1.85rem 0;
  }
`;

export const FooterBigLink = styled.a`
  font-size: 5rem;
  font-weight: 800;
  position: relative;
  width: 100%;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.secondaryLight};

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: -1rem;
    left: -1rem;
    bottom: -1rem;
    height: 2px;
    border-radius: 5px;
    background: ${({ theme }) => theme.backgroundColor.light};
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3.5rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.45rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 2rem;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  margin-top: 8rem;
  gap: 5rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 0;
    margin-top: 3rem;
  }
`;

export const FooterContact = styled.div`
  position: relative;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-bottom: 1rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 50%;
      background: #1a1a1a;
    }

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 25%;
      background: #a8aca3;
      bottom: 0;
      left: 0;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &::before {
      content: "";

      width: 100%;
    }

    &::after {
      content: "";

      width: 50%;
    }
  }
`;

export const ContactHeader = styled.p`
  font-size: 1.3rem;
  margin: 3rem 0 1.5rem 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 2rem 0 0.85rem 0;
  }
`;

export const ContactLink = styled.a`
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #8c8c8c;
  transition: 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.color.light};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 1px;
    border-radius: 5px;
    background: ${({ theme }) => theme.backgroundColor.light};
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const FooterSocials = styled.span`
  display: flex;
  gap: 0.85rem;
`;

export const FooterArrowLine = styled.div`
  position: relative;
`;

export const FooterLine = styled.hr`
  margin-top: 3rem;
  border: none;
  height: 0.2px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
`;

export const ArrowToTop = styled.div`
  height: 60px;
  width: 60px;
  background: rgba(255, 255, 255, 0.05);
  background-image: url(${arrowUp});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 10px 16px;
  position: absolute;
  right: 0;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.backgroundColor.orange};
    background-image: url(${arrowUp});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 10px 16px;
  }

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    top: -6rem;
    left: 50%;
  }

  &::after {
    content: "back to top";
    display: block;
    width: 150px;
    font-size: 0.8rem;
    line-height: 30px;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: rgba(255, 255, 255, 0.15);
    transition: all 0.5s;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    position: absolute;
    left: calc(30px + 15px);
    top: -140px;
    pointer-events: none;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::before,
    &::after {
      display: none;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 45px;
    width: 45px;
  }
`;

export const Copyright = styled.div`
  padding-top: 2rem;
  color: #8c8c8c;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 0.85rem;
  }
`;

export const Small = styled.a``;
