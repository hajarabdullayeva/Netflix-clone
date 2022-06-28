import styled from "styled-components";

const MainCarousel = styled.div`
  position: relative;
  //overflow: scroll;

  & img {
    width: 285px;
    height: 160px;
    object-fit: cover;
    cursor: pointer;
  }

  & > div {
    display: flex;
    overflow-x: hidden;
    gap: 0.5rem;
    padding: 0 6rem;
  }

  & > svg {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  & > svg:first-of-type {
    left: 2.7rem;
  }

  & > svg:last-of-type {
    right: 2.7rem;
  }
`;

export default MainCarousel;
