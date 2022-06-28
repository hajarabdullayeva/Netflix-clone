import styled from "styled-components";

const MainHero = styled.div`
  height: calc(100vh);
  background: ${(props) =>
          `url(https://image.tmdb.org/t/p/original${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 6rem;
  position: relative;

  & .hero__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(20, 20, 20, 0.5);
  }

  & .hero__data {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    max-width: 550px;
    z-index: 1;
  }

  & button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.7rem;
    padding: 1.3rem 3rem;
    font-size: 1.6rem;
    border: 0;
    background: #fff;
    font-weight: 600;
    color: #141414;
    border-radius: 4px;
  }

  & p {
    font-size: 2rem;
    color: #fff;
  }

  & h1 {
    font-size: 3.8rem;
    color: #fff;
    font-weight: 900;
  }
`;

export default MainHero;
