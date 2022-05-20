import { useAuth } from "../../../context/AuthContext"
import { useForum } from "../../../context/ForumContext"
import { useReducer } from "react"
import imgTools from '../../../../assets/images/barre_outils.JPG'

const reducer = (state, action) => ({...state, ...action})

const ForumContentFeedPostNewTopic = () => {
    console.log("%cForum -- ForumContent -- Feed -- PostNewTopic", 'background: white; color: darkgreen;')
    const { currentUser } = useAuth()
    const { forumState, forumDispatch } = useForum()
    const [newTopicState, newTopicDispatch] = useReducer(reducer, {
        topicTitle: '',
        inputTags: [],
        messageAreaTxt: ``,
    })

    const postNewMessage = () => {
        if(newTopicState.topicTitle === "" || newTopicState.messageAreaTxt === ""){
            window.alert("Vous ne pouvez pas poster de sujet sans titre ou sans message.")
        } else {
            const newTopicsList = {...forumState.topics}
            const newMessagesList = {...forumState.messages}
            const date = new Date().toLocaleString()
            const lastId = `${currentUser.pseudo.substring(0,3)}${date.toString().substring(0,3)}${Object.keys(newMessagesList).length}`
            const topicId = `${forumState.currentRubrique.substring(0,3)}${date.toString().substring(0,3)}${Object.keys(forumState.topics).length}`
            const isPinned = document.getElementById("pinTopic").checked ? true : false
            console.log(isPinned)
            newTopicsList[topicId] = {
                rubrique: forumState.currentRubrique,
                pinned: false,
                title: newTopicState.topicTitle,
                author: currentUser.pseudo,
                tags: newTopicState.inputTags,
                members: 0,
                messages: 0,
            }
            newMessagesList[lastId] = {
                rubrique: forumState.currentRubrique,
                topic: topicId,
                date:  date,
                msgId:  lastId,
                imgSrc: currentUser.imgSrc,
                author:  currentUser.pseudo,
                title:  currentUser.title,
                msg: newTopicState.messageAreaTxt,
                lastModification: date,
            }
            forumDispatch({
                topics: newTopicsList,
                messages: newMessagesList,
                lastMessageId: lastId,
            })
            newTopicDispatch({
                topicTitle: '',
                inputTags: ``,
                messageAreaTxt: ``,
            })
            document.getElementById("emailAlert").checked = false
            document.getElementById("pinTopic").checked = false
        }
    }    

    return(
        <div className="flex justify-center items-center border-2 border-borderGreyColor w-full">
            <form className="flex flex-col justify-center items-center relative top-2 w-full mx-4">
                <legend className="absolute -top-6 text-2xl w-full border-b-2 border-borderGreyColor bg-whiteColorBg px-2">Créer un nouveau sujet dans : “{forumState.rubriques[forumState.currentRubrique].title}”</legend>
                <div className="mt-28 mb-4 px-3 w-full sm:mt-10">
                    <div className="flex flex-col gap-1 opacity-60">
                        <span className="font-bold">Titre du sujet (maximum 80 caractères) :</span>
                        <input autoComplete="off" value={newTopicState.topicTitle} className="border-2 border-borderGreyColor outline-none" type="text" size="40" name="tagsInput" id="tagsInput" onChange={e => newTopicDispatch({topicTitle: e.target.value})}/>
                    </div>
                </div>
                <div className="px-3 w-full">
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
                            value={newTopicState.messageAreaTxt}
                            onChange={e => newTopicDispatch({messageAreaTxt: e.target.value})}
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                        <div className="flex flex-col gap-1 opacity-60">
                            <span className="font-bold">Tags du Sujet :</span>
                            <input autoComplete="off" value={newTopicState.inputTags} className="border-2 border-borderGreyColor outline-none" type="text" size="40" name="tagsInput" id="tagsInput" onChange={e => newTopicDispatch({inputTags: e.target.value.split(",")})}/>
                        </div>
                        <div className="flex justify-start items-center opacity-60 gap-2 mt-4">
                            <input type="checkbox" name="emailAlert" id="emailAlert" />
                            <span className="font-bold">Me prévenir des réponses par e-mail</span>
                        </div>
                        <div className="flex justify-start items-center opacity-60 gap-2 mt-2">
                            <input type="checkbox" name="pinTopic" id="pinTopic" />
                            <span className="font-bold">Épingler ce sujet</span>
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

export default ForumContentFeedPostNewTopic