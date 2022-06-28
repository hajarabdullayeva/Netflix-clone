import React from "react";
import ModalStyles from "./style";
import {createPortal} from "react-dom";

const Modal = (props) => {
    return createPortal(
        <ModalStyles>
            <p onClick={() => props.setOpen(false)}>✕</p>
            <iframe
                title="video"
                width="600"
                height="430"
                src={`https://www.youtube.com/embed/${props.id}`}
            ></iframe>
        </ModalStyles>,
        document.body
    );
};

export default Modal;
