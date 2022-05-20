import { memo } from "react"
import ModalContactEmail from "./ModalContactEmail"
import ModalContactFormulaire from "./ModalContactFormulaire"

const ModalHeader = ({handleClose}) => {
    console.log("%cModalContact -- Header", 'background: lightgreen; color: black;')

    return(
        <div className="modalHeader">
            <div className="modalHeader-header">
                <h3 className="h3Modal">Contacter</h3>
                <button className="btnExitModal" onClick={() => handleClose()}>×</button>
            </div>
            <div className="textModal">
                Cet accès privé est <strong>UNIQUEMENT&nbsp;</strong>réservé aux membres des programmes d’accompagnement de Mike Codeur. Si vous souhaitez connaitre les conditions d’accès ou si vous avez un problème de connexion, vous pouvez contacter le support            
            </div>
            <ModalContactEmail />
            <ModalContactFormulaire />
        </div>
    )
}

export default memo(ModalHeader)