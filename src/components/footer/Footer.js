import { memo } from "react"
// import Recaptcha from "../import/Recaptcha"
import FooterElement from "./FooterElement"

const Footer = () => {
    console.log("%cFooter", 'background: darkgreen; color: white;')

    //Ici, une div est ajoutée afin de créer un effet de "lever de rideau sur le footer".

    return (
        <>
            <footer className="footer fixed bottom-0 left-0 right-0 w-auto flex justify-center items-center bg-blackColor text-whiteColor">
                <FooterElement className="lowerElement" />
                {/* <Recaptcha></Recaptcha> */}
            </footer>
            <div className="uselessDiv footer bg-whiteColorBg"></div>
        </>
    )
}

export default memo(Footer)