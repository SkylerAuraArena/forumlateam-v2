import { useForum } from "../../context/ForumContext"
import ForumContentFeedHeader from "./forumContentFeed/ForumContentFeedHeader"
import ForumContentFeedMessage from "./forumContentFeed/ForumContentFeedMessage"
import ForumSearchComponentElt from "./ForumSearchComponentElt"

const ForumSearchComponent = () => {
    console.log("%cForum -- ForumContent -- Search", 'background: lightgreen; color: black;')
    const { forumState } = useForum()

    const returnedDiv = forumState.searchMessagesList && Object.keys(forumState.searchMessagesList).map(message => (
        forumState.searchMessagesList[message] && <ForumContentFeedMessage 
            key={message}
            topic={forumState.searchMessagesList[message].topic} 
            date={forumState.searchMessagesList[message].date} 
            msgId={forumState.searchMessagesList[message].msgId} 
            imgSrc={forumState.searchMessagesList[message].imgSrc} 
            author={forumState.searchMessagesList[message].author} 
            title={forumState.searchMessagesList[message].title} 
            msg={forumState.searchMessagesList[message].msg}
            lastModification={forumState.searchMessagesList[message].lastModification}
            searched={true}
        />
    ))

    return(
        <>
            <ForumSearchComponentElt />
            <div className="mb-5 w-full">
                <ForumContentFeedHeader callingComponent="message" />
                <div className="flex flex-col w-full justify-center items-center mb-4 lg:mb-20">
                    { returnedDiv }
                </div>
            </div>
        </>
    )
}

export default ForumSearchComponent