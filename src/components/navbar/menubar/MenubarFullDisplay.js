import { memo } from "react"
import MenubarLogo from "./MenubarLogo"
import MainMenu from "./MainMenu/MainMenu"
import MenubarBtn from "./MenubarBtn"

const MenubarFullDisplay = ({liensInternes}) => {
    console.log("%cNavbar -- Menubar -- HiddenDisplay", 'background: green; color: white;')

    return(
        <div className="responsiveBreak-1316 justify-between h-full wGolbal">
            <MenubarLogo/>
            <div className="menubar py-0.5 bg-whiteColorBg">
                <div className="flex justify-between h-full">
                    <MainMenu liensInternes={liensInternes} />
                    <MenubarBtn />
                </div>
            </div>
        </div>
    )
}

export default memo(MenubarFullDisplay)