import { useLayoutEffect, useRef, useState } from "react";
import { useForum } from "../../context/ForumContext"
import Button from "../../parts/buttons/Button"

const ForumContentSearchElt = () => {
    console.log("%cForum -- ForumContent -- SearchElt", 'background: lightgreen; color: black;')
    const inputRef = useRef()
    const [inputState, setInputState] = useState("");
    const { forumState, forumDispatch } = useForum()
    const css_formDiv = `w-full mx-auto`
    const cssSearch = `w-full h-12 mx-auto outline-none border-2 border-borderSideBarGreyColor rounded-3xl text-sm px-4 opacity-60`

    const handleClick = () => {
        forumDispatch({mainContentSearch: inputState})
        setInputState("")
    }

    useLayoutEffect(() => {
        inputRef.current.focus()
    }, [])
    

    return(
        <div className={css_formDiv}>
            <form role="search" method="get" className="flex items-center gap-3" action="https://lateam.mikecodeur.com/">
                <label className="w-full">
                    <input 
                        ref={inputRef}
                        type="text"
                        className={cssSearch}
                        id="forumFeedSearch"
                        name="forumFeedSearch"
                        value={forumState.mainContentSearch}
                        onChange={ event => forumDispatch({mainContentSearch: event.target.value})}
                        autoComplete="off"
                    />
                </label>
                <Button css="btnForum h-12 px-4 font-bold cursor-pointer" function={handleClick}>Rechercher</Button>
            </form>
        </div>
    )
}

export default ForumContentSearchElt