
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Header = styled.header`
  ul {
    display: flex;
    justify-content: flex-end;

    li {
      margin-left: 30px;
      font-size: 16px;
      font-weight: bold;

      &.active a {
        color: #2B4C5D;
        opacity: 1;
      }

      a {
        color: #A1AFBA;
        opacity:0.5;

        &:hover,
        :active {
          opacity: 1;
        }

        :active {
          color: #2B4C5D;
        }
      }
    }
  }
`;

const MainNav = () => {
  const router = useRouter();

  return (
    <Header>
      <nav>
        <ul>
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={router.pathname == "/project" ? "active" : ""}>
            <Link href="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default MainNav;
