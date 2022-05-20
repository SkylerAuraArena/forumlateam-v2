import { useRef } from 'react'

const ModalSocialsImage = (props) => {
    console.log("%cModalChat -- Socials -- Images", 'background: white; color: darkgreen;')
    const imgRef = useRef()
    const cssAnimationImg = "img-socialImg-size"   
    const css_li = `liImgModal flex list-none w-8 h-8`
    const css_a = `aImgModal flex justify-center items-center w-8 h-8 ${props.cssImg} cursor-pointer`

    const handleEnter = () => {
        imgRef.current.className = `${cssAnimationImg} imgModalContact-socialImg-white`
    }
    const handleExit = () => {
        imgRef.current.className = `${cssAnimationImg}`
    }

    return(
        <li className={css_li} onTouchStart={()=>handleEnter()} onTouchMove={()=>handleEnter()} onTouchCancel={()=>handleExit()} onTouchEnd={()=>handleExit()} onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleExit()}>
            <a className={css_a} target="_blank" rel="noreferrer" href={props.linkAddress}>
                <img ref={imgRef} className={cssAnimationImg} src={props.imgSrc} alt={props.imgAlt}/>
            </a>
        </li>
    )
}

export default ModalSocialsImage