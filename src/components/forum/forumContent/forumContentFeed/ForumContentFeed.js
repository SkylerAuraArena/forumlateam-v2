import ForumContentFeedHeader from "./ForumContentFeedHeader"
import ForumContentFeedMain from "./ForumContentFeedMain"
import ForumContentFeedPostNewTopic from "./ForumContentFeedPostNewTopic"
import ForumContentFeedReply from "./ForumContentFeedReply"

const ForumContentFeed = ({callingComponent}) => {
    console.log("%cForum -- ForumContent -- Feed", 'background: lightgreen; color: black;')

    return(
        <div className="mb-5 w-full lg:mb-20">
            <ForumContentFeedHeader callingComponent={callingComponent} />
            <ForumContentFeedMain callingComponent={callingComponent} />
            { callingComponent === "topicsList" && <ForumContentFeedPostNewTopic /> }
            { callingComponent === "message" && <ForumContentFeedReply /> }
        </div>
    )
}

export default ForumContentFeed