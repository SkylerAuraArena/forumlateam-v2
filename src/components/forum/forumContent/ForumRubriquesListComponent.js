import ForumSearchComponentElt from "./ForumSearchComponentElt"
import ForumContentFeed from "./forumContentFeed/ForumContentFeed"

const ForumRubriquesListComponent = () => {
    console.log("%cForum -- ForumContent -- ForumRubriquesListComponent", 'background: green; color: white;')

    return(
        <>
            <ForumSearchComponentElt />
            <ForumContentFeed callingComponent="rubriquesList" />
        </>
    )
}

export default ForumRubriquesListComponent