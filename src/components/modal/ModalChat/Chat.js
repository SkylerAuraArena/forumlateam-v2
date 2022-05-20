
import { memo, useRef, useState, useEffect } from "react"
import ChatMessage from "./ChatMessage";
import { addDoc, serverTimestamp } from "firebase/firestore"

const Chat = ({messageRef, messages, user, handleClose}) => {
    console.log("%cModalChat -- Chat", 'background: lightgreen; color: black;')
    const inputRef = useRef()
    const chatDummyDiv = useRef()
    const [newMsg, setNewMsg] = useState("")

    const sendMessage = async () => {
        newMsg && await addDoc(messageRef, {date: serverTimestamp(), message: newMsg, senderId: user.uid, senderEmail: user.email})
        inputRef.current.value = ""
        setNewMsg("")
    }

    useEffect(() => {
        chatDummyDiv.current.scrollIntoView({behavior: "smooth"})
    }, [messages])

    return(
        <>
            <div className="flex justify-around py-2">
                <h3 className="h3Modal m-0 px-10 py-2">Chat</h3>
                <div className="divExitModalChat m-0 px-10 py-2 flex justify-center items-center">
                    <button className="btnExitModalChat m-0 p-0" onClick={() => handleClose()}>×</button>
                </div>
            </div>
            <div className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col justify-start items-start gap-3 px-3">
                <i className="mt-1" />
                {     
                    messages && messages.map(msg => (
                        <ChatMessage key={msg.id} date={msg.date} user={user} message={msg} />
                    )) 
                }
                <div ref={chatDummyDiv}></div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 w-full mt-2 px-2 pb-20 sm:pb-0">
                <textarea 
                    className="form-control form-control-message w-11/12 py-4" 
                    cols="40" rows="10"
                    aria-invalid="false"
                    ref={inputRef} 
                    type="text" 
                    value={newMsg}
                    placeholder="Votre message..." 
                    onChange={e=>setNewMsg(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && sendMessage()}
                    />
                <div className="flex justify-center items-center bg-purpleColor border-purpleColor border-2 cursor-pointer w-12 h-full rounded-full hover:bg-whiteColorBgModal">
                    <i onClick={sendMessage}>🕊️</i>
                </div>
            </div>
        </>
    )
}

export default memo(Chat)