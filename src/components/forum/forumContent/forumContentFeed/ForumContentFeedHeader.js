const ForumContentFeedHeader = ({ callingComponent }) => {
    console.log("%cForum -- ForumContent -- Feed -- Header", 'background: white; color: darkgreen;')
    let titles = null
    let returnedDiv = null
    
    switch (callingComponent) {
        case "rubriquesList":
            titles = ["Forum","Sujets","Messages"]
            break
        case "topicsList":
            titles = ["Sujet","Participants","Messages","Particip.","Mess."]
            break
        case "message":
            titles = ["Auteur","Messages"]
            break
        default:
            break
    }

    if(callingComponent === "message"){
        returnedDiv =  (
            <div className="flex flex-col bg-greyColor">
                <div className="flex flex-row justify-between items-center px-4 py-2.5 bg-greyColor border-2 border-borderSideBarGreyColor rounded text-blackColor font-bold w-full gap-2 sm:gap-0">
                    <span className="w-3/12">{titles[0]}</span>
                    <span className="w-9/12">{titles[1]}</span>
                </div>   
            </div> 
        )
    }else if(callingComponent === "topicsList"){
        returnedDiv = (
            <div className="flex flex-row justify-between items-center px-4 py-2.5 bg-greyColor border-2 border-borderSideBarGreyColor rounded text-blackColor font-bold">
                <span className="wHugeW">{titles[0]}</span>
                <div className="justify-around items-center gap-2 wSmallW hidden sm:flex">
                    <span>{titles[1]}</span>
                    <span>{titles[2]}</span>
                </div>
                <div className="flex justify-around items-center gap-2 wSmallW sm:hidden">
                    <span>{titles[3]}</span>
                    <span>{titles[4]}</span>
                </div>
            </div>
        )
    } else if(callingComponent === "rubriquesList") {
        returnedDiv = (
            <div className="flex flex-row justify-between items-center px-4 py-2.5 bg-greyColor border-2 border-borderSideBarGreyColor rounded text-blackColor font-bold">
                <span className="wHugeW">{titles[0]}</span>
                <div className="flex justify-around items-center gap-2 wSmallW">
                    <span>{titles[1]}</span>
                    <span>{titles[2]}</span>
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

export default ForumContentFeedHeader