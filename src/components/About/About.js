import React from "react";
import { StyledAbout } from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
    </StyledAbout>
  );
};

export default About;
