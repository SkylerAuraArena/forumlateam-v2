import { useReducer } from 'react'
import logoLoupe from "../../../assets/images/logo-loupe.svg"
import logoCroix from "../../../assets/images/logo-croix.svg"
import TopbarContentExtraSearch from './TopbarContentExtraSearch'

const reducer = (state, action) => ({...state, ...action})

const TopbarContentExtra = ({ callingComponent, btnMailIsClicked, setBtnMailIsClicked, borderCss = null }) => {
    console.log("%cNavbar -- Topbar -- TopbarContent -- Extra", 'background: white; color: darkgreen;')
    const imgCss = "imgTopbar-loupeImg-size z-30 imgTopbarLogo-purple"
    const altImg = "Une image de loupe"
    const css_div_main = callingComponent === "topbar" ? `ml-1.5 mr-3.5 px-2.5 ${borderCss} flex justify-center items-center` : `flex justify-center items-center`

    const [topbarContentExtraState, topbarContentExtraDispatch] = useReducer(reducer, {
        displaySearch : false,
        imgSrc: logoLoupe,
        cssDiv: "cursor-pointer",
      })

    const handleClick = () => {
        setBtnMailIsClicked(btnMailIsClicked => !btnMailIsClicked)
        const newDisplaySearch = !topbarContentExtraState.displaySearch
        const newImgSrc = topbarContentExtraState.imgSrc === logoLoupe ? logoCroix : logoLoupe
        topbarContentExtraDispatch({
            displaySearch: newDisplaySearch,
            imgSrc: newImgSrc,
        })
    }

    return(
        <div className={css_div_main}>
            <div className="cursor-pointer">
                <div className="w-9 h-9 flex justify-center items-center" onClick={()=>handleClick()}>
                    <img className={imgCss} src={topbarContentExtraState.imgSrc} alt={altImg}/>
                </div>
            </div>
            {topbarContentExtraState.displaySearch && (<div className="relative">
                <TopbarContentExtraSearch />
            </div>)}
        </div>
    )
}

export default TopbarContentExtra

