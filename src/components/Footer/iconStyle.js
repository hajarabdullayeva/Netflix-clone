import styled from "styled-components";

const FooterIcons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & svg {
    cursor: pointer;
    transition: 0.5s;
  }

  & svg:hover {
    transform: scale(1.1);
  }
`;

export default FooterIcons;
