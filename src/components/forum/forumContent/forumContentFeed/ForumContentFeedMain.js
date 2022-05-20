import { useEffect } from "react"
import { useForum } from "../../../context/ForumContext"
import ForumContentFeedElt from "./ForumContentFeedElt"
import ForumContentFeedMessage from "./ForumContentFeedMessage"

const ForumContentFeedMain = ({callingComponent}) => {
    console.log("%cForum -- ForumContent -- Feed -- Main", 'background: white; color: darkgreen;')
    const { forumState, forumDispatch } = useForum()
    const currentRubrique = forumState.currentRubrique
    const currentTopic = forumState.currentTopic
    let returnedDiv = null

    if(callingComponent === "message"){
        returnedDiv = currentRubrique !== "" && Object.keys(forumState.messages).map(message => (
            forumState.messages[message].rubrique === currentRubrique && forumState.messages[message].topic === currentTopic && <ForumContentFeedMessage 
                key={message}
                topic={forumState.messages[message].topic} 
                date={forumState.messages[message].date} 
                msgId={forumState.messages[message].msgId} 
                imgSrc={forumState.messages[message].imgSrc} 
                author={forumState.messages[message].author} 
                title={forumState.messages[message].title} 
                msg={forumState.messages[message].msg}
                lastModification={forumState.messages[message].lastModification}
                searched={false}
            />
        ))
    }else if(callingComponent === "topicsList"){
        returnedDiv = currentRubrique !== "" && Object.keys(forumState.topics).map(topic => (
            forumState.topics[topic].rubrique === currentRubrique && <ForumContentFeedElt
                key={topic}
                topic={topic}
                state={forumState}
                dispatch={forumDispatch}
                callingComponent={callingComponent}
                pinned={forumState.topics[topic].pinned}
                rubrique={forumState.topics[topic].rubrique}
                title={forumState.topics[topic].title}
                author={forumState.topics[topic].author}
                members={forumState.topics[topic].members}
                messages={forumState.topics[topic].messages}
            />
        ))
    } else if(callingComponent === "rubriquesList") {
        returnedDiv = Object.keys(forumState.rubriques).map(rubrique => (
            <ForumContentFeedElt
                key={rubrique}
                rubrique={rubrique}
                state={forumState}
                dispatch={forumDispatch}
                callingComponent={callingComponent}
                title={forumState.rubriques[rubrique].title}
                description={forumState.rubriques[rubrique].description}
                topics={forumState.rubriques[rubrique].topics}
                messages={forumState.rubriques[rubrique].messages}
            />
        ))
    }

    useEffect(() => {
        if(forumState.lastMessageId) {
            const scrollingDistance = document.getElementById(forumState.lastMessageId)?.offsetHeight + 50
            document.getElementById(forumState.lastMessageId)?.scrollIntoView({behavior: "smooth"})
            setTimeout(() => {
                window.scrollTo(0, Math.abs(window.scrollY - scrollingDistance))
            }, 300);
        }
    }, [forumState.lastMessageId])

    return(
        <div className="flex flex-col w-full justify-center items-center mb-12">
            { returnedDiv }
        </div>
    )
}

export default ForumContentFeedMain