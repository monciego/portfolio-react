import styled from "styled-components";

export const StyledPlayground = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const PlaygroundProjectContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const PlaygroundProject = styled.div`
  position: relative;
`;

export const PlaygroundProjectImageContainer = styled.div`
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
  width: 32rem;
  height: 100%;
  position: relative;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const PlaygroundImage = styled.img`
  height: 100%;
  width: 100%;
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

export const LinkWrapper = styled.span`
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
`;

export const PlayGroundProjectLive = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1rem;

  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "not-allowed")};
  pointer-events: ${({ hasLink }) => (hasLink ? "all" : "none")};
  text-decoration: ${({ hasLink }) => (hasLink ? "none" : "line-through")};
`;
