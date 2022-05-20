import FooterElementUpper from "./FooterElementUpper"
import FooterElementLower from "./FooterElementLower"

const FooterElement = (props) => {

    return(
        <>
            {props.className === "upperElement" && <FooterElementUpper className={props.className}/>}
            {props.className === "lowerElement" && <FooterElementLower className={props.className}/>}
        </>
    )
}

export default FooterElement