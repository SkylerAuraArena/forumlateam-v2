import { useState, useEffect, useLayoutEffect } from "react"

const LienInterne = (props) => {
    console.log("%cNavbar -- Menubar -- Mainmenu -- LienInterne", 'background: white; color: darkgreen;')
    const [opacity, setOpacity] = useState("")
    const [currentSiteLocationColor, setcurrentSiteLocationColor] = useState(props.currentSiteLocation === props.titre ? "text-purpleColor" : "text-black")
    const css_li = `list-none`
    const css_a_fullMenu = `py-8 px-4 cursor-pointer tracking-widest uppercase font-bold ${currentSiteLocationColor} transform duration-150 ease-in-out ${opacity}`
    const css_a_hiddenMenu = `px-8 cursor-pointer tracking-widest uppercase font-bold ${currentSiteLocationColor} hover:text-purpleColor`

    const handleOver = () => {
        props.setIsOver(props.titre)
    }
    
    useLayoutEffect(() => {
        props.currentSiteLocation === props.titre ? setcurrentSiteLocationColor("text-purpleColor") : setcurrentSiteLocationColor("text-black")
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [props.currentSiteLocation]);

    useEffect(() => {
        if(props.callingComponent === "fullMenu"){
            if(!props.isUpon){
                if(props.currentSiteLocation === props.titre){
                    setOpacity("") 
                    setcurrentSiteLocationColor("text-purpleColor")
                } else {
                    setOpacity("") 
                    setcurrentSiteLocationColor("text-black")
                }
            } else {
                if(props.isOver === props.titre){
                    setOpacity("")
                    setcurrentSiteLocationColor("text-purpleColor")
                } else {
                    setOpacity("lienInterne-txtOpacity30")
                    if(props.currentSiteLocation === props.titre){
                        setcurrentSiteLocationColor("text-purpleColor")
                    } else {
                        setcurrentSiteLocationColor("text-black")
                    }
                }
            } 
        }
    // eslint-disable-next-line
    }, [props.isUpon, props.isOver])

    return(
        <>
            {
                props.callingComponent === "fullMenu" && <li className={css_li} onMouseOver={()=>handleOver()} onTouchStart={()=>handleOver()} onTouchMove={()=>handleOver()}>
                    <a className={css_a_fullMenu} href={props.linkAddress}>
                        {props.titre}
                    </a>
                </li>
            }
            {
                props.callingComponent !== "fullMenu" && <li className={css_li}>
                    <a className={css_a_hiddenMenu} href={props.linkAddress}>
                        {props.titre}
                    </a>
                </li>
            }
        </>
    )
}

export default LienInterne