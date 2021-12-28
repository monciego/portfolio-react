import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 5rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 2.5rem;
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color: ${(props) => (props.dark ? "#f2f2f2" : "#262637")};

  &::after {
    position: absolute;
    content: "${(props) => props.number}";
    left: 37%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) =>
      props.dark ? "rgba(29, 28, 28, 0.2)" : "rgba(0, 0, 0, 0.06)"};
    z-index: -1;
    font-size: 8rem;
  }
`;
