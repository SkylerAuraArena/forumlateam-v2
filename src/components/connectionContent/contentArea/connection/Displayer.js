import Button from "../../../parts/buttons/Button"

const Displayer = (props) => {
    console.log("%cConnectionContent -- ContentArea -- Displayer", 'background: lightgreen; color: black;')
    const cssBtn = "btnSite w-full"

    return(
        <div className='wrapComponent'>
            <Button css={cssBtn} function={()=>props.setMode("inscription")}>S'incrire</Button>
            <Button css={cssBtn} function={()=>props.setMode("connexion")}>Se connecter</Button>
        </div>
    )
}

export default Displayer