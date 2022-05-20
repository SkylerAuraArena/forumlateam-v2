import { useForum } from "../../context/ForumContext"
import ForumContentFeedElt from "./forumContentFeed/ForumContentFeedElt"
import ForumContentFeedHeader from "./forumContentFeed/ForumContentFeedHeader"
import ForumSearchComponentElt from "./ForumSearchComponentElt"

const ForumDiplayHotAndNoResComponent = ({type}) => {
    console.log("%cForum -- ForumContent -- Hot and NoRes", 'background: lightgreen; color: black;')
    const { forumState, forumDispatch } = useForum()
    let returnedDiv = null 

    if(type === "hot"){
        returnedDiv = Object.keys(forumState.topics).map(topic => (
            forumState.topics[topic].messages > 1 && <ForumContentFeedElt
                key={topic}
                topic={topic}
                state={forumState}
                dispatch={forumDispatch}
                callingComponent="topicsList"
                pinned={forumState.topics[topic].pinned}
                rubrique={forumState.topics[topic].rubrique}
                title={forumState.topics[topic].title}
                author={forumState.topics[topic].author}
                members={forumState.topics[topic].members}
                messages={forumState.topics[topic].messages}
            />
        ))
    } else if (type === "noRes") {
        returnedDiv = Object.keys(forumState.topics).map(topic => (
            forumState.topics[topic].messages <= 1 && <ForumContentFeedElt
                key={topic}
                topic={topic}
                state={forumState}
                dispatch={forumDispatch}
                callingComponent="topicsList"
                pinned={forumState.topics[topic].pinned}
                rubrique={forumState.topics[topic].rubrique}
                title={forumState.topics[topic].title}
                author={forumState.topics[topic].author}
                members={forumState.topics[topic].members}
                messages={forumState.topics[topic].messages}
            />
        ))
    }

    return(
        <>
            <ForumSearchComponentElt />
            <div className="mb-5 w-full">
                <ForumContentFeedHeader callingComponent="topicsList" />
                <div className="flex flex-col w-full justify-center items-center mb-4 lg:mb-20">
                    { returnedDiv }
                </div>
            </div>
        </>
    )
}

export default ForumDiplayHotAndNoResComponent