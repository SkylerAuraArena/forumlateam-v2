import { useAuth } from "../../../context/AuthContext"
import { useForum } from "../../../context/ForumContext"
import { useState } from "react"
import imgTools from '../../../../assets/images/barre_outils.JPG'

const ForumContentFeedReply = () => {
    console.log("%cForum -- ForumContent -- Feed -- Reply", 'background: white; color: darkgreen;')
    const { currentUser } = useAuth()
    const { forumState, forumDispatch } = useForum()
    const [inputTags, setInputTags] = useState(() => forumState.topics[forumState.currentTopic]?.tags)
    const [messageAreaTxt, setMessageAreaTxt] = useState("")

    const postNewMessage = () => {
        if(messageAreaTxt === ""){
            window.alert("Vous ne pouvez pas poster de message vide.")
        } else {
            const newMessagesList = {...forumState.messages}
            const newTopicsList = {...forumState.topics}
            const date = new Date().toLocaleString()
            const lastId = `${currentUser.pseudo.substring(0,3)}${date.toString().substring(0,3)}${Object.keys(newMessagesList).length}`
            newTopicsList[forumState.currentTopic].tags = inputTags
            newMessagesList[lastId] = {
                rubrique: forumState.currentRubrique,
                topic: forumState.currentTopic,
                date :  date,
                msgId :  lastId,
                imgSrc : currentUser.imgSrc,
                author :  currentUser.pseudo,
                title :  currentUser.title,
                msg : messageAreaTxt,
                lastModification: date,
            }
            forumDispatch({
                topics: newTopicsList,
                messages: newMessagesList,
                lastMessageId: lastId,
            })
            setMessageAreaTxt("")
            document.getElementById("emailAlert").checked = false
        }
    }    

    return(
        <div className="flex justify-center items-center border-2 border-borderGreyColor w-full">
            <form className="flex flex-col justify-center items-center relative top-2 w-full mx-4">
                <legend className="absolute -top-6 text-2xl w-full border-b-2 border-borderGreyColor bg-whiteColorBg px-2">Répondre à : {forumState.topics[forumState.currentTopic].title}</legend>
                <div className="mt-16 mb-4 px-3 w-full sm:mt-10">
                    <div className="flex flex-col mb-5 border-2 border-borderGreyColor">
                        <div className="flex justify-center items-center bg-greyColor border-b-2 border-borderGreyColor w-full">
                            <img src={imgTools} alt="une barre d'outils" />
                        </div>
                        <textarea 
                            className="messageTxtArea p-3 outline-none"
                            id="messageArea"
                            name="messageArea"
                            cols="40" rows="10"
                            aria-invalid="false"
                            aria-describedby="messageHelp" 
                            placeholder=""
                            value={messageAreaTxt}
                            onChange={e => setMessageAreaTxt(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                        <div className="flex flex-col gap-1 opacity-60">
                            <span className="font-bold">Étiquettes :</span>
                            <input autoComplete="off" value={inputTags} className="border-2 border-borderGreyColor outline-none" type="text" size="40" name="tagsInput" id="tagsInput" onChange={e => setInputTags(e.target.value.split(","))}/>
                        </div>
                        <div className="flex justify-start items-center opacity-60 gap-2 mt-4">
                            <input type="checkbox" name="emailAlert" id="emailAlert" />
                            <span className="font-bold">Me prévenir des réponses par e-mail</span>
                        </div>
                        <div className="flex justify-end items-center w-full">
                            <span className="px-2 py-1 border-2 bg-greyColor border-gray-400 cursor-pointer w-min opacity-60 text-sm" onClick={() => postNewMessage()}>Envoyer</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForumContentFeedReply