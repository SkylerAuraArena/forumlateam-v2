import { useMainContext, usePath } from "../../context/MainContext"
import HeaderBreadcrumb from "./HeaderBreadcrumb/HeaderBreadcrumb"

const Header = () => {
    console.log("%cConnectionContent -- Header", 'background: green; color: white;')
    const css_header = `responsiveHeaderPadding bg-greyColor overflow-hidden pb-6 mb-6 sm:mb-10 xl:pt-36`
    const css_container = `wGolbal relative text-left leading-5 px-4`
    const css_h2 = `headerH2 text-3xl uppercase leading-10 tracking-tight`
    const { mainContextState, mainContextDispatch } = useMainContext()
    const paths = usePath()

    return(
        <header className={css_header}>
            <div className={css_container}>
                <h2 className={css_h2}>{mainContextState.currentSiteLocation}</h2>
                <HeaderBreadcrumb mainContextState={mainContextState} mainContextDispatch={mainContextDispatch} paths={paths} />
            </div>
        </header>
    )
}

export default Header