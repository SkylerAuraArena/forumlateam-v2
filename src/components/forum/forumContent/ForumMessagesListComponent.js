import { useState } from "react"
import ForumContentFeed from "./forumContentFeed/ForumContentFeed"

const ForumMessagesListComponent = ({tags}) => {
    console.log("%cForum -- ForumContent -- ForumMessageComponent", 'background: green; color: white;')
    const [spanSubTxt, setSpanSubTxt] = useState(" | M'abonner")
    const [spanFavoriteTxt, setSpanFavoriteTxt] = useState("Favori")

    const tagsList = tags.map((tag, index) => { 
        const returnSpan = index === 0 ? 
            <span key={index} className="text-purpleColor cursor-pointer break-all hover:text-blueColor">{tag}</span> 
            : 
            <span key={index} className="text-purpleColor cursor-pointer break-all hover:text-blueColor">, {tag}</span>
        return returnSpan
    })

    const handleClickSub = () => [
        spanSubTxt === " | M'abonner" ? setSpanSubTxt(" | Me désabonner") : setSpanSubTxt(" | M'abonner")
    ]
    const handleClickFav = () => [
        spanFavoriteTxt === "Favori" ? setSpanFavoriteTxt("Retirer des favoris") : setSpanFavoriteTxt("Favori")
    ]

    return(
        <>
            <div className="flex justify-between flex-col items-start mb-0 w-full gap-4 sm:gap-6 sm:flex-row sm:items-center sm:mb-3">
                <div className="flex flex-col justify-start items-start gap-2 sm:flex-row sm:justify-center sm:items-center">
                    <span className="font-bold text-purpleColor cursor-pointer hover:text-blueColor" onClick={()=> handleClickSub()}>{spanSubTxt}</span>
                    <span className="text-purpleColor cursor-pointer text-sm hover:text-blueColor" onClick={()=> handleClickFav()}>{spanFavoriteTxt}</span>
                </div>
                {
                    tags.length > 0 && <div className="flex flex-col justify-start w-full items-start flex-wrap gap-1 sm:gap-0 sm:flex-row sm:justify-end sm:items-center sm:w-8/12">
                        <span className="opacity-60">Étiqueté&nbsp;:&nbsp;</span>
                        <span>{tagsList}</span>
                    </div>
                }
            </div>
            <ForumContentFeed callingComponent="message" />
        </>
    )
}

export default ForumMessagesListComponent