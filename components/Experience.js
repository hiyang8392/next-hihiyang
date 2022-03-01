import Image from "next/image";
import styled from "styled-components";

const StyledExperience = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .image {
    margin-right: 10px;

    img {
      border-radius: 4px;
    }
  }

  .info {
    .title {
      font-size: 16px;
    }

    .company {
      font-size: 12px;
    }
  }
`;

const Experience = (props) => {
  return (
    <StyledExperience>
      <div className="image">
        <Image src={`/assets/images/experience/${props.image}.png`} alt="logo" width={60} height={60} />
      </div>
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="company">{props.company}</div>
      </div>
    </StyledExperience>
  );
};

export default Experience;
