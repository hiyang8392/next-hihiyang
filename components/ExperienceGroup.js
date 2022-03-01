import styled from "styled-components";
import Experience from "./Experience";
import ExperienceData from "../data/experience";

const StyledExperienceGroup = styled.div`
  padding: 0 20px 20px 0;
  max-width: 500px;
`;

const experience = ExperienceData.map((item) => {
  return (
    <Experience
      key={item.image}
      image={item.image}
      title={item.title}
      company={item.company}
    />
  );
});

const ExperienceGroup = () => {
  return (
    <StyledExperienceGroup>
      <h2>Experience</h2>
      {experience}
    </StyledExperienceGroup>
  );
};

export default ExperienceGroup;
