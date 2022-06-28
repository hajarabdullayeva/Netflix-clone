import styled from "styled-components";

const NavIcons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & svg {
    cursor: pointer;
  }

  & p {
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export default NavIcons;
