import styled, { css } from "styled-components";

export const HoverStyle = css`
  content: "";
  position: absolute;
  bottom: -0.3rem;
  right: 0;
  left: 0;
  width: 0;
  height: 0.7px;
  background: ${({ theme }) => theme.backgroundColor.light};
  transition: 0.3s ease-in-out;
`;

export const Flex = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledProjects = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 3rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

export const ProjectTransitionImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  position: absolute;
  transition: 0.3s ease;
`;

export const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5rem 3rem;
  color: #fff;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(13, 14, 14, 0.97),
    rgba(0, 0, 0, 0.9)
  );
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: 0.6s ease;
  margin-top: 2rem;
  z-index: 5;
`;

export const ProjectTitle = styled.span``;

export const LinkName = styled.span``;

export const ProjectCodeLink = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 9rem;
  color: ${({ theme }) => theme.color.light};
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
`;

export const ProjectLiveLink = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  color: ${({ theme }) => theme.color.light};
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
`;

export const ProjectCard = styled.article`
  background: #fff;
  width: 32rem;
  height: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.1);
    z-index: 2;
  }

  &:hover {
    box-shadow: 0 2px 15px rgba(13, 14, 14) 15%;
  }

  &:hover ${ProjectDetails} {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  &:hover ${ProjectTransitionImage} {
    opacity: 1;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 25rem;
  }
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
