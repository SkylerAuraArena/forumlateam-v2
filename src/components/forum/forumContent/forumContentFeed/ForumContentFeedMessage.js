import { useRef } from "react"
import logoDiscussion from "../../../../assets/images/logo_discussion.svg"
import { useForum } from "../../../context/ForumContext"

const ForumContentFeedMessage = ({topic, date, msgId, imgSrc, author, title, msg, lastModification, searched}) => {
    console.log("%cForum -- ForumContent -- Feed -- Message", 'background: white; color: darkgreen;')
    const { forumDispatch } = useForum()
    const imgRef = useRef()
    const spanTitleRef = useRef()
    let returnedHeader = ""
    let returnedMsg = ""
    const delai = lastModification
    const modificationTxt = `Ce sujet a été modifié le ${delai} par :`
    const cssImg = `w-5 h-5 imgModalContactLogo-purple`

    const handleEnter = () => {
        imgRef.current.className = `w-5 h-5`
        spanTitleRef.current.className = `text-blackColor font-bold cursor-pointer ml-2`
    }
    const handleExit = () => {
        imgRef.current.className = cssImg
        spanTitleRef.current.className = `text-purpleColor font-bold cursor-pointer ml-2`
    }
    const handleChangeFeed = () => {
        forumDispatch({
            currentTopic: topic
        })            
    }

    if(searched){
        returnedHeader = <div className="flex flex-col justify-between items-start px-4 py-2.5 border-l-2 border-r-2 border-b-2 border-borderSideBarGreyColor rounded w-full gap-2">
            <div className="flex justify-between items-start flex-col gap-2 w-full sm:flex-row sm:items-center sm:gap-0">
                <span className="opacity-60">{date}</span>
                <div className="flex items-center gap-2">
                    <span className="cursor-pointer text-sm hover:text-purpleColor">Répondre</span>
                    <span className="opacity-40 cursor-pointer">#{msgId}</span>
                </div>
            </div>
            <div className="flex justify-start items-center gap-1">
                <span className="text-sm font-bold">En réponse à :</span>
                <div className="flex items-center" onTouchStart={()=>handleEnter()} onTouchMove={()=>handleExit()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()} onClick={() => handleChangeFeed()}>
                    <img ref={imgRef} className={cssImg} src={logoDiscussion} alt="Bulle de discussion"/>
                    <span ref={spanTitleRef} className='text-purpleColor font-bold cursor-pointer ml-2'>{topic}</span>
                </div>
            </div>
        </div>
    } else {
        returnedHeader = <div className="flex justify-between items-start px-4 py-2.5 border-l-2 border-r-2 border-b-2 border-borderSideBarGreyColor rounded w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
            <span className="opacity-60">{date}</span>
            <div className="flex items-center gap-2">
                <span className="cursor-pointer text-sm hover:text-purpleColor">Répondre</span>
                <span className="opacity-40 cursor-pointer">#{msgId}</span>
            </div>
        </div>
    }

    if(date === lastModification){
        returnedMsg = (
            <div className="flex justify-start items-start w-full opacity-60 break-all h-full sm:pl-1 sm:w-9/12">
                { msg }
            </div>
        )
    } else {
        returnedMsg = (
            <div className="flex flex-col justify-between items-start w-full sm:w-9/12 sm:pl-1">
                <div className="opacity-60 break-all sm:min-h-msgHeight">{msg}</div>
                <div className="flex flex-col justify-start pt-3 mt-5 border-t-2 gap-1 border-borderGreyColor text-xs w-full sm:flex-row">
                    <span className="opacity-50">{modificationTxt}</span>
                    <div className="flex justify-start items-center gap-1 cursor-pointer">
                        <img className="w-3 h-3" src={imgSrc} alt="Un avatar"/>
                        <span>{author}</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div id={msgId} className="flex flex-col w-full bg-greyColor">
            { returnedHeader }
            <div className="flex justify-center items-center px-5 pt-6 pb-5 mr-12 bg-whiteColorBg border-l-2 border-r-2 border-b-2 border-borderSideBarGreyColor rounded w-full flex-col gap-6 sm:gap-0 sm:flex-row sm:items-start">
                <div className="flex flex-col items-center w-full gap-2 sm:gap-6 sm:w-3/12 sm:items-start">
                    <div className="flex flex-col items-center gap-1 sm:mx-5 sm:items-start">
                        <div className="flex flex-col items-center gap-3 cursor-pointer sm:items-start">
                            <img className="avatar w-16 h-16 mr-0" src={imgSrc} alt="Un avatar"/>
                            <span>{author}</span>
                        </div>
                        <span className="opacity-60 text-xs sm:text-sm">{title}</span>
                    </div>
                    <span className="text-xs cursor-pointer hover:text-blueColor">Message privé</span>
                </div>
                { returnedMsg }
            </div>
        </div>
    )
}

export default ForumContentFeedMessage