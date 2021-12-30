import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  PlaygroundImage,
  PlaygroundProjectDetails,
  PlaygroundProjectImageContainer,
  PlayGroundProjectLive,
  PlaygroundProjectName,
  PlaygroundProject,
  LinkWrapper,
} from "../styles/Playground.styled";

const PlaygroundProjectComponent = ({
  img,
  projectName,
  liveLink,
  hasLink,
}) => {
  return (
    <PlaygroundProject>
      <PlaygroundProjectImageContainer hasLink={hasLink}>
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
            View Live <BsArrowUpRightCircle />{" "}
          </PlayGroundProjectLive>
        </LinkWrapper>
      </PlaygroundProjectDetails>
    </PlaygroundProject>
  );
};

export default PlaygroundProjectComponent;
