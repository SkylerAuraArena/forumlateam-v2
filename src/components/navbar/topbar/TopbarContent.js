import { useState } from 'react'
import TopbarContentExtra from './TopbarContentExtra'
import TopbarContentLeft from './TopbarContentLeft'
import TopbarContentRight from './TopbarContentRight'

const TopbarContent = ({callingComponent = "topbar"}) => {
    console.log("%cNavbar -- Topbar -- TopbarContent", 'background: lightgreen; color: black;')
    const [btnMailIsClicked, setBtnMailIsClicked] = useState(false)
    const borderCss = "border-r border-l borderGreyColor"

    return(
        <div className="wGolbal flex justify-between leading-none p-0">
            {callingComponent === "topbar" && <TopbarContentLeft></TopbarContentLeft>}
            {callingComponent === "topbar" && <TopbarContentRight btnMailIsClicked={btnMailIsClicked}></TopbarContentRight>}
            <TopbarContentExtra callingComponent={callingComponent} btnMailIsClicked={btnMailIsClicked} setBtnMailIsClicked={setBtnMailIsClicked} borderCss={borderCss}></TopbarContentExtra>
        </div>
    )
}

export default TopbarContent