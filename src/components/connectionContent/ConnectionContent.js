import { memo } from "react"
import ContentArea from "./contentArea/ContentArea"

const ConnectionContent = () => {
    console.log("%cConnectionContent", 'background: darkgreen; color: white;')
    const css_section = "relative z-10 bg-whiteColorBg"

    return(
        <section className={css_section}>
            <hr className="border-0 m-0 p-0" id="headerScrollingDiv" />
            <ContentArea />
        </section>
    )
}

export default memo(ConnectionContent)