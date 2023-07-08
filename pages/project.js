import Head from "next/head";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/project";

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
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    h2 {
      margin-bottom: 5px;
    }
  }
`;

const StyledGroup = styled.div`
  height: 55vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    height: 100%;
    overflow: initial;
  }
`;

const projectItem = projectData.map((project) => {
  return (
    <ProjectItem
      key={project.image}
      image={project.image}
      name={project.name}
      demoUrl={project.demoUrl}
      githubUrl={project.githubUrl}
      desc={project.desc}
      techList={project.techList}
    />
  );
});

const Project = () => {
  return (
    <>
      <Head>
        <title>Project | Hi Yang</title>
      </Head>
      <Main>
        <h1>Project</h1>
        <StyledGroup>{projectItem}</StyledGroup>
      </Main>
    </>
  );
}

export default Project;
