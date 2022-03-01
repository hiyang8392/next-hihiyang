import Head from "next/head";
import styled from "styled-components";
import ExperienceGroup from "../components/ExperienceGroup";
import SkillGroup from "../components/SkillGroup";

const Main = styled.main`
  flex-grow: 1;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 10px;
  }

  h3 {
    margin: 5px 5px 5px 0;
    opacity: 0.7;
  }

  @media (max-width: 800px) {
    margin: 10px 0;

    h2 {
      margin-bottom: 5px;
    }
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 55vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    overflow: initial;
  }
`;

const About = () => {
  return (
    <>
      <Head>
        <title>About | Hi Yang</title>
      </Head>
      <Main>
        <h1>About</h1>
        <Group>
          <ExperienceGroup />
          <SkillGroup />
        </Group>
      </Main>
    </>
  );
}

export default About;
