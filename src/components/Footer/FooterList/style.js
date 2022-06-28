import styled from "styled-components";

const FooterList = styled.ul`
  font-size: 1.3rem;
  color: #808080;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.5rem;

  & li {
    transition: 0.5s;
  }

  & li:hover {
    color: #fff;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export default FooterList;
