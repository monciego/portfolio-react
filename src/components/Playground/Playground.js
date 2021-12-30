import React from "react";
import {
  PlaygroundProjectContainer,
  StyledPlayground,
} from "../styles/Playground.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import PlaygroundProjectComponent from "./PlaygroundProject";
import { projectsData } from "./data";

const Playground = () => {
  return (
    <StyledPlayground id="playground">
      <SectionHeading>
        <SectionTitle number="03">Playground</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        A collection of projects that I've created for practice and leisure.
      </StyledParagraph>
      <PlaygroundProjectContainer>
        {projectsData.map((project) => {
          return <PlaygroundProjectComponent key={project.id} {...project} />;
        })}
      </PlaygroundProjectContainer>
    </StyledPlayground>
  );
};

export default Playground;
