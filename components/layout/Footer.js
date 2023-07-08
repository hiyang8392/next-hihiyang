import styled from "styled-components";
import { FaEnvelopeSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const StyledFooter = styled.footer`
  ul {
    display: flex;

    li {
      margin-right: 15px;
      font-size: 16px;

      .icon svg {
        color: #A1AFBA;
        cursor: pointer;
        width: 30px;
        height: 30px;

        :hover,
        :active,
        &.active {
          color: #2B4C5D;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href="https://github.com/hiyang8392" target="_blank" rel="noreferrer">
            <div className = "icon"><FaGithubSquare /></div>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hiyang8392" target="_blank" rel="noreferrer">
            <div className = "icon"><FaInstagramSquare /></div>
          </a>
          </li>
          <li>
          <a href="mailto:fay78392@gmail.com">
            <div className = "icon"><FaEnvelopeSquare /></div>
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
