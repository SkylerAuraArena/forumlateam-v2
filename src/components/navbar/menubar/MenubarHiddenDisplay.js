import { memo } from "react"
import MenubarLogo from "./MenubarLogo"
import TopbarContent from "../topbar/TopbarContent"
import BurgerMenu from "./BurgerMenu"

const MenubarHiddenDisplay = ({setHiddenMenuOpened}) => {
    console.log("%cNavbar -- Menubar -- FullDisplay", 'background: green; color: white;')

    return(
        <div className="responsiveDisplay-1316 justify-between h-full wGolbal">
            <MenubarLogo/>
            <div className="flex justify-center items-center flex-col pr-4 gap-1 sm:flex-row sm:gap-6">
                <TopbarContent callingComponent="NavbarHiddenDisplay" />
                <BurgerMenu setHiddenMenuOpened={setHiddenMenuOpened} />
            </div>
        </div>
    )
}

export default memo(MenubarHiddenDisplay)