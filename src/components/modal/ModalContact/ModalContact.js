import ModalHeader from "./ModalHeader";
import ModalSocials from "./ModalSocials";

const ModalContact = ({ cssModal, handleClose }) => {
    console.log("%cModalContact", 'background: green; color: white;')

    return (
        <div id="modalContact" className={cssModal[1]} onClick={(e) => e.stopPropagation()}  >
            <ModalHeader handleClose={handleClose} />
            <ModalSocials />
        </div>
    )
  }

  
  export default ModalContact;