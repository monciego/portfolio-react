import styled from "styled-components";
import { Link as MobileMenuNavLink } from "react-scroll";
import { RiCloseLine as closeIcon } from "react-icons/ri";

export const MobileMenuContainer = styled.div`
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor.dark};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease;
`;

export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const CloseIcon = styled(closeIcon)`
  cursor: pointer;
  color: #fff;
  font-size: 1.75rem;
`;

export const CloseText = styled.span``;

export const MobileMenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
`;

export const MobileMenuLink = styled(MobileMenuNavLink)`
  font-family: ${({ theme }) => theme.fonts.cardo};
  font-size: 2rem;
  font-weight: 500;
  transition: 0.3s ease;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`;

export const MobileButton = styled.a`
  font-family: ${({ theme }) => theme.fonts.cardo};
  font-size: 0.85rem;
  letter-spacing: 0.1875rem;
  font-weight: 500;
  transition: 0.3s ease;
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.backgroundColor.darkGray};
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & span {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
  }

  & > span {
    overflow: hidden;
  }

  & > span > span {
    overflow: hidden;
  }

  &:hover > span > span {
    animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
  }

  @keyframes MoveUpInitial {
    to {
      transform: translate3d(0, -105%, 0);
    }
  }

  @keyframes MoveUpEnd {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  &::before {
    content: "";
    background: ${({ theme }) => theme.backgroundColor.orange};
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    transform-origin: 100% 50%;
  }

  &:hover::before {
    transform: scale3d(0, 1, 1);
    transform-origin: 0% 50%;
  }
`;

export const MobileSocials = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2.5rem;
  display: flex;
  gap: 1.5rem;
`;

export const MobileSocial = styled.a``;

export const MobileQuote = styled.span`
  font-family: ${({ theme }) => theme.fonts.cardo};
  font-style: italic;
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
`;
