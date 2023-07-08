import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Main = styled.main`
  min-width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  .profile {
    width: 50%;
    font-size: 36px;
    line-height: 50px;
  }

  .avatar {
    width: 50%;

    img {
      border-radius: 50px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
      font-size: 36px;
    }

    .profile,
    .avatar {
      width: 100%;
      text-align: center;

      p {
        font-size: 26px;
      }
    }

    .avatar {
      width: 250px;
      height: 250px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Yang 的小窩"></meta>
      </Head>
      <Main>
        <div className="avatar">
          <Image src="/assets/images/home/avatar.jpg" alt="avatar" width={300} height={300} />
        </div>
        <div className="profile">
          <h2>Hi, I am Yang</h2>
          <p>Web Developer</p>
        </div>
      </Main>
    </>
  );
}

export default Home;
