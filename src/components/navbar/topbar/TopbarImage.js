import { useRef } from 'react'

const TopbarImage = (props) => {
    console.log("%cNavbar -- Topbar -- TopbarContent -- Left -- Image", 'background: white; color: green;')

    const imgRef = useRef()
    const cssAnimationImg = "img-socialImg-size imgTopbar-socialImg imgLogo-dark"   
    const css_li = `flex list-none`
    const css_a = `flex justify-center items-center w-12 h-7 mt-2.5 ${props.cssBorder} cursor-pointer transform duration-300 hover:-translate-y-1`

    const handleEnter = () => {
        imgRef.current.className = `img-socialImg-size imgTopbar-socialImg`
    }
    const handleExit = () => {
        imgRef.current.className = `${cssAnimationImg}`
    }

    return(
        <li className={css_li} onTouchStart={()=>handleEnter()} onTouchMove={()=>handleExit()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()}>
            <a className={css_a} target="_blank" rel="noreferrer" href={props.linkAddress}>
                <img ref={imgRef} className={cssAnimationImg} src={props.imgSrc} alt={props.imgAlt}/>
            </a>
        </li>
    )
}

export default TopbarImage