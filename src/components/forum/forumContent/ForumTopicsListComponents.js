import { useState } from "react"
import ForumContentFeed from "./forumContentFeed/ForumContentFeed"

const ForumTopicsListComponent = () => {
    console.log("%cForum -- ForumContent -- ForumTopicsListComponent", 'background: green; color: white;')
    const [spanTxt, setSpanTxt] = useState("M'abonner")

    const handleClick = () => [
        spanTxt === "M'abonner" ? setSpanTxt("Me désabonner") : setSpanTxt("M'abonner")
    ]

    return(
        <>
            <div className="flex justify-start items-center w-full mb-3">
                <span className="font-bold text-purpleColor cursor-pointer text-sm hover:text-blueColor" onClick={()=> handleClick()}>{spanTxt}</span>
            </div>
            <ForumContentFeed callingComponent="topicsList" />
        </>
    )
}

export default ForumTopicsListComponent