import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  z-index: 5;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);

  & p {
    position: absolute;
    top: 14%;
    right: 26%;
    font-size: 2rem;
    cursor: pointer;
    font-weight: 700;
  }

  & iframe {
    border: 0;
    border-radius: 5px;
  }
`;

export default Modal;
