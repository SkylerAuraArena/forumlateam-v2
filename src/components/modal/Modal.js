import Backdrop from "./ModalBackdrop";
import ModalContact from "./ModalContact/ModalContact";
import ModalChat from "./ModalChat/ModalChat";

const Modal = ({ typeModal, cssModal, handleClose }) => {
  console.log("%cModal", 'background: darkgreen; color: white;')

    return (
      <Backdrop cssBackdrop={cssModal[0]} onClick={() => handleClose()}>
        {typeModal === "contact" && <ModalContact cssModal={cssModal} handleClose={handleClose}/>}
        {typeModal === "chat" && <ModalChat cssModal={cssModal} handleClose={handleClose}/>}
      </Backdrop>
    );
  };
  
  export default Modal;