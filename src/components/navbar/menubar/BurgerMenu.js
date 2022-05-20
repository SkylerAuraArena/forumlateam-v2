import { useRef } from 'react'

const BurgerMenu = ({setHiddenMenuOpened}) => {
    console.log("%cNavbar -- Menubar -- BurgerMenu", 'background: lightgreen; color: black;')
    const burgerMenuRef1 = useRef()
    const burgerMenuRef2 = useRef()
    const burgerMenuRef3 = useRef()
    const burgerMenuCss = "w-8 h-0.5 border-0"
    const burgerMenuCssColor = 'bg-blackColor'
    const cssHr = `${burgerMenuCss} ${burgerMenuCssColor} burgerMenuAnimation`

    const handleClick = () => {
        const refClass1 = burgerMenuRef1.current.className
        if(refClass1 === `${cssHr}`) {
            burgerMenuRef1.current.className=`${cssHr} burgerMenuAnimation1`
            burgerMenuRef2.current.className=`${cssHr} burgerMenuAnimation2`
            burgerMenuRef3.current.className=`${cssHr} burgerMenuAnimation3`
            setHiddenMenuOpened(true)
        } else {
            burgerMenuRef1.current.className=`${cssHr}`
            burgerMenuRef2.current.className=`${cssHr}`
            burgerMenuRef3.current.className=`${cssHr}`
            setHiddenMenuOpened(false)
        }
    }

    return(
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer py-3" onClick={handleClick}>
            <hr ref={burgerMenuRef1} className={cssHr}/>
            <hr ref={burgerMenuRef2} className={cssHr}/>
            <hr ref={burgerMenuRef3} className={cssHr}/>
        </div>
    )
}

export default BurgerMenu