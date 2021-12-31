import styled from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";

export const LiveIcon = styled(BsArrowUpRightCircle)`
  transition: 0.3s ease-in-out;
`;

export const StyledPlayground = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const PlaygroundProjectContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const LinkWrapper = styled.span`
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 0;
    transform: scaleX(1);
    display: block;
    height: 0.0625rem;
    background: ${({ theme }) => theme.backgroundColor.dark};
    transition: 0.3s ease-in-out;
  }
`;

export const PlaygroundImage = styled.img`
  height: 100%;
  width: 100%;
  transition: 0.3s ease;
`;

export const PlaygroundProjectWrapper = styled.article`
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

export const PlaygroundProject = styled.div`
  pointer-events: ${({ hasLink }) => (hasLink ? "all" : "none")};

  &:hover ${LiveIcon} {
    transform: ${({ hasLink }) => (hasLink ? "rotate(50deg)" : "none")};
  }

  &:hover ${LinkWrapper}::after {
    width: ${({ hasLink }) => (hasLink ? "80%;" : "0")};
  }

  &:hover ${PlaygroundImage} {
    transform: ${({ hasLink }) => (hasLink ? "scale(1.025)" : "0")};
  }
`;

export const PlaygroundProjectImageContainer = styled.a`
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
  width: 32rem;
  height: 100%;
  position: relative;
  display: block;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const PlaygroundProjectDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 0.5rem;
  width: 100%;
`;

export const PlaygroundProjectName = styled.h2`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1rem;
  white-space: pre-line;
`;

export const PlayGroundProjectLive = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.9rem;

  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
  pointer-events: ${({ hasLink }) => (hasLink ? "all" : "none")};
  text-decoration: ${({ hasLink }) => (hasLink ? "none" : "line-through")};
`;
