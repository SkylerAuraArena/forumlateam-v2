import { useState } from "react"
import { useMainContext } from "../../../context/MainContext"
import LienInterne from './LienInterne'

const MainMenu = ({ liensInternes }) => {
    console.log("%cNavbar -- Menubar -- Mainmenu", 'background: lightgreen; color: black;')
    const [isUpon, setIsUpon] = useState(false)
    const [isOver, setIsOver] = useState("")
    const { mainContextState } = useMainContext()

    const handleEnter = () => {
        setIsUpon(true)
    }
    const handleExit = () => {
        setIsUpon(false)
    }

    const linksRubriques = Object.keys(liensInternes).map(lien => (
        <LienInterne
            key={liensInternes[lien].titre}
            titre={liensInternes[lien].titre}
            linkAddress={liensInternes[lien].lien}
            currentSiteLocation={mainContextState.currentSiteLocation}
            callingComponent="fullMenu"
            isUpon={isUpon}
            isOver={isOver}
            setIsOver={setIsOver}>
        </LienInterne>
    ))

    return(
        <div className="flex justify-center items-center">
            <ul className="mainMenu" onTouchStart={()=>handleEnter()} onTouchMove={()=>handleEnter()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()}>
                {linksRubriques}
            </ul>
        </div> 
    )
}

export default MainMenu