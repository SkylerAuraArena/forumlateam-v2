import { useRef } from 'react'

const ModalContactEmail = () => {
    console.log("%cModalChat -- Email", 'background: white; color: darkgreen;')
    const iRef = useRef()
    const aRef = useRef()
    const css_div_main = "flex justify-start items-center px-12 pb-7"
    const css_div_secondary = `modalContactDivEmail_secondary flex justify-center items-center cursor-default hover:text-black`
    const purpleFilterCss = 'imgModalContactLogo-purple'
    const whiteFiltreCss = 'imgModalContactLogo-white'
    const iCss = `imgTopbar-lettreImg mr-2.5 mb-1 w-4 h-11`
    const aCss = `cursor-pointer`
    const css_i = `${iCss} ${purpleFilterCss}`
    const css_a = `${aCss} ${purpleFilterCss}`
    const linkMail = "mailto:support@mikecodeur.com"

    const handleEnter = () => {
        iRef.current.className = `${iCss} ${whiteFiltreCss}`
        aRef.current.className = `${aCss} ${whiteFiltreCss}`
    }
    const handleExit = () => {
        iRef.current.className = `${iCss} ${purpleFilterCss}`
        aRef.current.className = `${aCss} ${purpleFilterCss}`
    }

    return(
        <div className={css_div_main}>
            <div className={css_div_secondary} href={linkMail} onTouchStart={()=>handleEnter()} onTouchMove={()=>handleExit()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()}>
                <i ref={iRef} className={css_i}></i>
                <a ref={aRef} className={css_a} href={linkMail}>support@mikecodeur.com</a>
            </div>
        </div>
    )
}

export default ModalContactEmail