import styled from "styled-components";

const NavList = styled.ul`
  font-size: 1.4rem;
  color: #e5e5e5;
  font-weight: 500;
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-grow: 1;
  list-style: none;

  & li {
    transition: 0.5s;
  }

  & li:hover {
    color: #fff;
  }

  & .nav--active {
    font-weight: 900;
    color: #fff;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export default NavList;
