import { memo } from "react"

const Loader = () => {
    console.log("%cMainContent -- ContentArea -- Loader", 'background: lightgreen; color: black;')

    return(
        <div className="wrapper">
            <div className="toiletroll">
                <div className="roll"></div>
                <div className="papers">
                    <div className="paper">Loading</div>
                    <div className="paper">Wait</div>
                    <div className="paper">Please</div>
                </div>
            </div>
        </div>
    )
}

export default memo(Loader)