import { useForum } from "../../context/ForumContext"
import logoLoupe from "../../../assets/images/logo-loupe.svg"
import { useState } from "react"

const SidebarSearch = () => {
    console.log("%cForum -- Sidebar -- SidebarElement -- SidebarSearch", 'background: white; color: darkgreen;')
    const { forumDispatch } = useForum()
    const [inputState, setInputState] = useState("")
    const css_formDiv = `w-full mx-auto`
    const cssSearch = `h-10 w-full mx-auto outline-none border-2 border-borderSideBarGreyColor rounded-3xl text-sm pl-3 pr-9 opacity-60`
    const css_div = "flex items-center h-10 relative"
    const css_img = "search-submit imgTopbar-loupeImg-sidebarSearch-size z-20 absolute right-3 opacity-60 hover: imgTopbarLogo-purple hover:opacity-100"
    const imgSrc = logoLoupe
    const altImg = "Une image de loupe"

    const handleClick = () => {
        forumDispatch({mainContentSearch: inputState})
        setInputState("")
    }

    return(
        <div className={css_formDiv}>
            <form role="search" method="get" className="flex items-center" action="https://lateam.mikecodeur.com/">
                <label className="w-full">
                    <input 
                        type="text"
                        className={cssSearch}
                        id="sidebarSearch"
                        name="sidebarSearch"
                        onChange={ event => setInputState(event.target.value) }
                        autoComplete="off"
                    />
                </label>
                <div className={css_div}>
                    <input type="image" className={css_img} src={imgSrc} alt={altImg} onClick={handleClick}/>
                </div>
            </form>
        </div>
    )
}

export default SidebarSearch