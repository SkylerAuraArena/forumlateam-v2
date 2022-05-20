import { useModalContext } from '../../context/ModalContext'
import Button from '../../parts/buttons/Button'

const MenubarBtn = (props) => {
    console.log("%cNavbar -- Menubar -- BtnContact", 'background: lightgreen; color: black;')
    const [ modalState, modalDispatch ] = useModalContext()
    const css_div = `flex justify-centen items-center mx-4 ${props.cssDiv}`
    const css_btn = `btnSite w-full btnMenu-Contact`
    const btnFunction = () => (modalState.modalContactOpen ? modalDispatch({modalContactOpen : false}) : modalDispatch({modalContactOpen : true}))

    return(
        <div className={css_div}>
            <Button css={css_btn} function={btnFunction}>Contacter</Button>
        </div>
    )
}

export default MenubarBtn