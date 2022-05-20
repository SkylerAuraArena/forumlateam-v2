import { useFirebaseConnectionContext, useFirebaseChatFetch } from "../../context/FirebaseConnectionContext"
import Chat from "./Chat";

const ModalChat = ({ cssModal, handleClose }) => {
    console.log("%cModalChat", 'background: green; color: white;')
    const { user } = useFirebaseConnectionContext()
    const [messageRef, messages] = useFirebaseChatFetch()
    const modalCss = `${cssModal[1]} h-screen overflow-hidden pb-3`

    return (
        <div id="modalChat" className={modalCss} onClick={(e) => e.stopPropagation()}  >
            <Chat messageRef={messageRef} messages={messages} user={user} handleClose={handleClose}/>      
        </div>
    )
  }

  export default ModalChat