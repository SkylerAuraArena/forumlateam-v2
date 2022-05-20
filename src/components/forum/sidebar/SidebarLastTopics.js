import { useForum } from "../../context/ForumContext"

const SidebarLastTopics = () => {
    console.log("%cForum -- Sidebar -- SidebarElement -- SidebarLastTopics", 'background: white; color: darkgreen;')
    const { forumState, forumDispatch } = useForum()

    const handleChangeFeed = (topic) => {
        forumDispatch({
            currentRubrique: forumState.last5Messages[topic].rubrique,
            currentTopic: forumState.last5Messages[topic].topic,
            displaySpecialTopics: "",
            sideBarSearch : "",
            mainContentSearch: "",
        })  
        document.getElementById("headerBreadcrumb")?.scrollIntoView({behavior: "smooth"})
    }
    
    const last5Messages = Object.keys(forumState.last5Messages).map(topic => (
        <li className='leading-8 cursor-pointer hover:text-purpleColor' key={topic} onClick={() => {handleChangeFeed(topic)}}>
            {forumState.last5Messages[topic].topic}
        </li>
    ))

    return(
        <div className="flex justify-start items-center">
            <ul className="list-none">
                { last5Messages }
            </ul>
        </div>
    )
}

export default SidebarLastTopics