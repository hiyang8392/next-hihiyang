import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledProjectItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);

  ul {
    padding: 0 40px;

    li {
      margin: 5px 0;
      list-style: initial;
      font-size: 14px;
    }
  }

  .info {
    max-width: 500px;

    .introduce {
      font-size: 16px;

      .title {
        display: flex;
        align-items: center;
        margin: 5px 0;
        font-weight: bold;
        font-size: 16px;

        .name {
          font-size: 18px;
        }

        .icon {
          display: flex;

          svg {
            width: 20px;
            height: 20px;
          }
        }

        div {
          margin-right: 10px;
        }

        a {
          color: #A1AFBA;
          cursor: pointer;

          .text {
            display: flex;
            padding: 2px 5px;
            border: 1px solid #A1AFBA;
            border-radius: 10px;
          }

          :hover {
            color: #2B4C5D;
            transform: scale(1.05);

            .text {
              border-color: #2B4C5D;
            }
          }
        }
      }
    }

    .desc {
      font-size: 14px;
    }

    .company-name {
      font-size: 12px;
    }
  }

  .image {
    display: flex;
    width: 368px;
    height: 230px;

    img {
      border-radius: 10px;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
    border: 0;

    .info {
      width: 100%;
    }

  .image {
    width: 318px;
    height: 180px;

      img {
        margin: 0;
        border-radius: 10px;
      }
    }
  }
`;

const ProjectItem = (props) => {
  const techList = props.techList.map((tech, index) => {
    return <li key={index}>{tech}</li>;
  });

  return (
    <StyledProjectItem image-url={props.image}>
      <div className="info">
        <div className="introduce">
          <div className="title">
            <div className="name">{props.name}</div>
            <a href={props.demoUrl} target="_blank" rel="noreferrer">
              <div className="text">Demo</div>
            </a>
            <a href={props.githubUrl} target="_blank" rel="noreferrer">
              <div className="icon"><FaGithub /></div>
            </a>
          </div>
          <div className="desc"><p>{props.desc}</p></div>
        </div>
        <ul>{techList}</ul>
      </div>
      <div className="image">
        <Image src={`/assets/images/project/${props.image}.png`} alt="project" width={368} height={230} />
      </div>
    </StyledProjectItem>
  );
};

export default ProjectItem;
