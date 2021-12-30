import React from "react";
import {
  PlaygroundImage,
  PlaygroundProjectDetails,
  PlaygroundProjectImageContainer,
  PlayGroundProjectLive,
  PlaygroundProjectName,
  PlaygroundProject,
  LinkWrapper,
  LiveIcon,
  PlaygroundProjectWrapper,
} from "../styles/Playground.styled";

const PlaygroundProjectComponent = ({
  img,
  projectName,
  liveLink,
  hasLink,
}) => {
  return (
    <PlaygroundProjectWrapper hasLink={hasLink}>
      <PlaygroundProject hasLink={hasLink}>
        <PlaygroundProjectImageContainer
          href={liveLink}
          hasLink={hasLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PlaygroundImage src={img} />
        </PlaygroundProjectImageContainer>
        <PlaygroundProjectDetails>
          <PlaygroundProjectName>{projectName}</PlaygroundProjectName>
          <LinkWrapper hasLink={hasLink}>
            <PlayGroundProjectLive
              href={liveLink}
              hasLink={hasLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live <LiveIcon />
            </PlayGroundProjectLive>
          </LinkWrapper>
        </PlaygroundProjectDetails>
      </PlaygroundProject>
    </PlaygroundProjectWrapper>
  );
};

export default PlaygroundProjectComponent;
