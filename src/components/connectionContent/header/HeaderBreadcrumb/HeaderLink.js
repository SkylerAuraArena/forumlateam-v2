import { Link } from "react-router-dom"
import { useForum } from "../../../context/ForumContext"

const HeaderLink = (props) => {
    console.log("%cConnectionContent -- Header -- HeaderBreadcrumb -- HeaderLink", 'background: white; color: darkgreen;')
    const { forumState, forumDispatch } = useForum()
    const css_li = `breadcrumb-item flex justify-center items-center`
    const css_span = `cursor-pointer hover:text-purpleColor`
    const rubriqueFeed = forumState.currentRubrique
    const topicFeed = forumState.currentTopic
    let returnedSpan = ""

    const handleClickHeaderLink = e => {
        const target = e.target.attributes[0].nodeValue
        if(target === topicFeed){
            forumDispatch({
                sideBarSearch : "",
                mainContentSearch: "",
                displaySpecialTopics: "",
                currentRubrique: rubriqueFeed,
                currentTopic: topicFeed
            })
        } else if(target === rubriqueFeed){
            forumDispatch({
                sideBarSearch : "",
                mainContentSearch: "",
                displaySpecialTopics: "",
                currentRubrique: rubriqueFeed,
                currentTopic: ""
            })
        } else{
            if(target === props.currentSiteLocation){
                forumDispatch({
                    sideBarSearch : "",
                    mainContentSearch: "",
                    displaySpecialTopics: "",
                    currentRubrique: "",
                    currentTopic: ""
                })
                props.mainContextDispatch({
                    currentSiteLocation: props.currentSiteLocation,
                })
            } else {
                forumDispatch({
                    sideBarSearch : "",
                    mainContentSearch: "",
                    displaySpecialTopics: "",
                    currentRubrique: "",
                    currentTopic: ""
                })
                props.mainContextDispatch({
                    sideBarSearch : "",
                    mainContentSearch: "",
                    displaySpecialTopics: "",
                    currentSiteLocation: "",
                })
            }
        }
    }

    if(props.home){
        if(props.currentSiteLocation === "" && rubriqueFeed === "" && topicFeed === ""){
            returnedSpan = <span className="breadcrumb-item-a cursor-text">{props.titre}</span>
        } else {
            returnedSpan = <>
                <Link className={css_span} to="/" onClick={handleClickHeaderLink}>{props.titre}</Link>
                <i className="mx-2 text-lg not-italic">›</i>
            </>
        }
    } else {
        if(props.css === "breadcrumb-item-after"){
            returnedSpan = <>
                <span match={props.pathMatch} className={css_span} onClick={handleClickHeaderLink}>{props.titre}</span>
                <i className="mx-2 text-lg not-italic">›</i>
            </>
        } else {
            returnedSpan = <span match={props.pathMatch} className="leading-7 breadcrumb-item-a cursor-text">{props.titre}</span>
        }
    }

    return(
        <li className={css_li}>
            { returnedSpan }
        </li>
    )
}

export default HeaderLink