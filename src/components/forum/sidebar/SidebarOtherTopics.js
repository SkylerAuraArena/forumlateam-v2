import { useForum } from "../../context/ForumContext"

const SidebarOtherTopics = () => {
    console.log("%cForum -- Sidebar -- SidebarElement -- SidebarOtherTopics", 'background: white; color: darkgreen;')
    const { forumDispatch } = useForum()
    const cssLi = "leading-8 cursor-pointer hover:text-purpleColor"

    const handleClick = (type) => {
        forumDispatch({
            displaySpecialTopics: type,
            sideBarSearch : "",
            mainContentSearch: "",
        })
        document.getElementById("headerBreadcrumb")?.scrollIntoView({behavior: "smooth"})
    }

    return(
        <div className="flex justify-start items-center">
            <ul className="list-none">
                <li className={cssLi}>
                    <span onClick={() => handleClick("hot")}>Sujets populaires</span>
                </li>
                <li className={cssLi}>
                    <span onClick={() => handleClick("noRes")}>Sujets sans réponse</span>
                </li>
            </ul>
        </div>
    )
}

export default SidebarOtherTopics