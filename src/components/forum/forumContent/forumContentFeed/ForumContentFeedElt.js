import { useRef } from "react"
import logoDiscussion from "../../../../assets/images/logo_discussion.svg"

const ForumContentFeedElt = (props) => {
    console.log("%cForum -- ForumContent -- Feed -- Main -- Elt", 'background: white; color: green;')
    const imgRef = useRef()
    const spanTitleRef = useRef()
    const topicCss = "w-full flex p-4 border-l-2 border-r-2 border-b-2 border-borderSideBarGreyColor rounded"
    const cssTopic = props.pinned ? `${topicCss} bg-yellowColor` : `${topicCss}`
    const opacity = "opacity-60"
    const cssSpanTopic = `${opacity} text-sm leading-6`
    const cssSpanRubrique = `${cssSpanTopic} pl-7`
    const cssImg = `w-5 h-5 imgModalContactLogo-purple`
    let returnedDiv = null

    const handleEnter = () => {
        imgRef.current.className = `w-5 h-5`
        spanTitleRef.current.className = `text-blackColor font-bold cursor-pointer ml-2`
    }
    const handleExit = () => {
        imgRef.current.className = cssImg
        spanTitleRef.current.className = `text-purpleColor font-bold cursor-pointer ml-2`
    }
    const handleChangeFeed = () => {
        if(props.callingComponent === "topicsList"){
            props.dispatch({
                currentTopic: props.topic
            })            
        } else if(props.callingComponent === "rubriquesList") {
            props.dispatch({
                currentRubrique: props.rubrique
            })
        }
    }

    if(props.callingComponent === "topicsList"){
        returnedDiv = (
            <div className={cssTopic}>
                <div className='flex flex-col gap-2 wHugeW'>
                    <div className="flex items-center" onTouchStart={()=>handleEnter()} onTouchMove={()=>handleExit()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()} onClick={() => handleChangeFeed()}>
                        <img ref={imgRef} className={cssImg} src={logoDiscussion} alt="Bulle de discussion"/>
                        <span ref={spanTitleRef} className='text-purpleColor font-bold cursor-pointer ml-2'>{props.title}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm sm:pl-7">
                        <span className={cssSpanTopic}>Démarré par :</span>
                        <a className="cursor-pointer" href="/">{props.author}</a>
                    </div>
                </div>
                <div className='flex justify-around gap-2 items-start wSmallW'>
                    <span className={opacity}>{props.members}</span>
                    <span className={opacity}>{props.messages}</span>
                </div>
            </div>
        )
    } else if(props.callingComponent === "rubriquesList") {
        returnedDiv = (
            <div className={topicCss}>
                <div className='flex flex-col gap-2 wHugeW'>
                    <div className="flex items-center" onTouchStart={()=>handleEnter()} onTouchMove={()=>handleExit()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()} onClick={() => handleChangeFeed()}>
                            <img ref={imgRef} className={cssImg} src={logoDiscussion} alt="Bulle de discussion"/>
                            <span ref={spanTitleRef} className='text-purpleColor font-bold cursor-pointer ml-2'>{props.title}</span>
                    </div>
                    <span className={cssSpanRubrique}>{props.description}</span>
                </div>
                <div className='flex justify-around gap-8 items-start wSmallW'>
                    <span className={opacity}>{props.topics}</span>
                    <span className={opacity}>{props.messages}</span>
                </div>
            </div>
        )
    }

    return(
        <>
             { returnedDiv }
        </>
    )
}

export default ForumContentFeedElt