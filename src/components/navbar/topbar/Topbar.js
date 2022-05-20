import TopbarContent from './TopbarContent'

const Topbar = () => {
    console.log("%cNavbar -- Topbar", 'background: green; color: white;')

    return(
        <div className="bg-whiteColorBg border-b borderGreyColor responsiveBreak-1316">
            <TopbarContent callingComponent="topbar" />
        </div>
    )
}

export default Topbar