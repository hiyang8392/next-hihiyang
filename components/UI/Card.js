import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

export default Card;