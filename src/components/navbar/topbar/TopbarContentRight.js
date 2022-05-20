import { useRef } from 'react'

const TopbarContentRight = ({ btnMailIsClicked }) => {
    console.log("%cNavbar -- Topbar -- TopbarContent -- Right", 'background: white; color: darkgreen;')
    const spanRef = useRef()
    const zIndexMail = btnMailIsClicked ? "z-0" : "z-30"
    const css_div_main = `ml-auto pl-1.5 border-l borderGreyColor flex justify-center items-center ${zIndexMail}`
    const css_a = `font-bold text-sm flex justify-center items-center cursor-default`
    const css_i = `imgTopbar-lettreImg mr-2.5 w-4 h-11 cursor-pointer`
    const css_span = `cursor-pointer hover:text-purpleColor`
    const linkMail = "mailto:support@mikecodeur.com"

    const handleEnter = () => {
        spanRef.current.className = `${css_span} topbarMail-purple`
    }
    const handleExit = () => {
        spanRef.current.className = `${css_span}`
    }

    return(
        <div className={css_div_main}>
            <a className={css_a} href={linkMail}>
                <i className={css_i} onTouchStart={()=>handleEnter()} onTouchMove={()=>handleEnter()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()}></i>
                <span ref={spanRef} className={css_span}>support@mikecodeur.com</span>
            </a>
        </div>
    )
}

export default TopbarContentRight