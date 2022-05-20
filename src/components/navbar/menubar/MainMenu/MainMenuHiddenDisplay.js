import { memo, useRef, useEffect } from "react"
import LienInterne from './LienInterne'
import MenubarBtn from "../MenubarBtn"
import { useMainContext } from "../../../context/MainContext"

const MainMenuHiddenDisplay = ({hiddenMenuOpened, liensInternes}) => {
    console.log("%cNavbar -- Menubar -- Mainmenu", 'background: lightgreen; color: black;')
    const hiddenMenuRef = useRef()
    const { mainContextState } = useMainContext()
    const cssDiv = `responsiveDisplay-1316 flex-col bg-whiteColorBg hiddenMenuAnimation`

    const linksRubriques = Object.keys(liensInternes).map(lien => (
        <LienInterne
            key={liensInternes[lien].titre}
            titre={liensInternes[lien].titre}
            linkAddress={liensInternes[lien].lien}
            currentSiteLocation={mainContextState.currentSiteLocation}
            callingComponent="hiddenMenu"
            isUpon=""
            isOver=""
            setIsOver="">
        </LienInterne>
    ))

    useEffect(() => {
        const refDiv = hiddenMenuRef.current.className
        if(refDiv === `${cssDiv}`) {
            hiddenMenuRef.current.className=`${cssDiv} hiddenMenuAnimation1`
        } else {
            hiddenMenuRef.current.className=`${cssDiv}`
        }
    }, [hiddenMenuOpened, cssDiv])

    return(
        <div ref={hiddenMenuRef} className={cssDiv}>
            <div className="overflow-y-auto">
                <ul className="flex flex-col gap-3 pt-4">
                    {linksRubriques}
                </ul>
            </div>
            <MenubarBtn cssDiv="mt-4"/>
        </div> 
    )
}

export default memo(MainMenuHiddenDisplay)