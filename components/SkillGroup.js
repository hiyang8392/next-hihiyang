import styled from "styled-components";
import Skill from "./Skill";
import SkillsData from "../data/skills";

const StyledSkillGroup = styled.div`
  padding: 0 20px 20px 0;
  max-width: 600px;
`;

const StyledUi = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const skills = SkillsData.map((skill) => {
  const skillItem = skill.items.map((item) => {
    return <Skill key={item.image} image={item.image} title={item.title}/>;
  });

  return (
    <div key={skill.type}>
      <h3>{skill.type}</h3>
      <StyledUi>{skillItem}</StyledUi>
    </div>
  );
});

const SkillGroup = () => {
  return (
    <StyledSkillGroup>
      <h2>Skills</h2>
      {skills}
    </StyledSkillGroup>
  );
};

export default SkillGroup;
