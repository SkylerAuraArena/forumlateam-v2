import { useForum } from "../../context/ForumContext"
import ForumDiplayHotAndNoResComponent from "./ForumDiplayHotAndNoResComponent"
import ForumMessagesListComponent from "./ForumMessagesListComponent"
import ForumRubriquesListComponent from "./ForumRubriquesListComponent"
import ForumSearchComponent from "./ForumSearchComponent"
import ForumTopicsListComponent from "./ForumTopicsListComponents"

const ForumContent = () => {
    console.log("%cForum -- ForumContent", 'background: green; color: white;')
    const { forumState } = useForum()
    const displaySpecialTopics = forumState.displaySpecialTopics
    const mainContentSearch = forumState.mainContentSearch
    const currentRubrique = forumState.currentRubrique
    const currentTopic = forumState.currentTopic
    const cssDiv = `flex flex-col gap-6 justify-center items-center w-full px-4 lg:w-8/12`

    const topicsList = currentRubrique !== "" && Object.keys(forumState.rubriques).map(rubrique => (
        rubrique === currentRubrique && <ForumTopicsListComponent 
            key={rubrique}
        />
    ))

    const messagesList = currentTopic !== "" && Object.keys(forumState.topics).map(topic => (
        topic === currentTopic && <ForumMessagesListComponent 
            key={topic}
            tags={forumState.topics[topic].tags}
        />
    ))

    return(
        <div className={cssDiv}>
            { (displaySpecialTopics === "hot" || displaySpecialTopics === "noRes") && <ForumDiplayHotAndNoResComponent type={displaySpecialTopics} /> }
            { displaySpecialTopics === "" && mainContentSearch !== "" && <ForumSearchComponent /> }
            { displaySpecialTopics === "" && mainContentSearch === "" && currentRubrique === "" && <ForumRubriquesListComponent /> }
            { displaySpecialTopics === "" && mainContentSearch === "" && currentRubrique !== "" && currentTopic === "" && topicsList }
            { displaySpecialTopics === "" && mainContentSearch === "" && currentRubrique !== "" && currentTopic !== "" && messagesList }
        </div>
    )
}

export default ForumContent