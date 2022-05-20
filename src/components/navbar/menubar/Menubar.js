import { memo, useState } from "react"
import { useLiensInternes } from "../../context/MainContext"
import MainMenuHiddenDisplay from "./MainMenu/MainMenuHiddenDisplay"
import MenubarFullDisplay from "./MenubarFullDisplay"
import MenubarHiddenDisplay from "./MenubarHiddenDisplay"

const Menubar = () => {
    console.log("%cNavbar -- Menubar", 'background: green; color: white;')
    const [hiddenMenuOpened, setHiddenMenuOpened] = useState(false)
    const liensInternes = useLiensInternes()

    return(
        <div className="py-2 bg-whiteColorBg">
            <MenubarFullDisplay liensInternes={liensInternes} />
            <MenubarHiddenDisplay setHiddenMenuOpened={setHiddenMenuOpened} />
            {hiddenMenuOpened && <MainMenuHiddenDisplay hiddenMenuOpened={hiddenMenuOpened} liensInternes={liensInternes} />}
        </div>
    )
}

export default memo(Menubar)