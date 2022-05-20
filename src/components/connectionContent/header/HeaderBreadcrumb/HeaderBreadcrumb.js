import HeaderLink from "./HeaderLink"

const HeaderBreadcrumb = ({mainContextState, mainContextDispatch, paths}) => {
    console.log("%cConnectionContent -- Header -- HeaderBreadcrumb", 'background: lightgreen; color: black;')

    const linksMap = paths[0].map((lien, index) => {
        const routeTo = `/${paths[0].slice(0, index + 1).join("/")}`
        return(
            <HeaderLink
                key={lien}
                home={index === 0 ? true : false}
                mainContextDispatch={mainContextDispatch}
                currentSiteLocation={mainContextState.currentSiteLocation}
                pathName={mainContextState.pathName}
                pathMatch={paths[1][index]}
                css={index < paths[0].length - 1 ? "breadcrumb-item-after" : ""}
                link={routeTo}
                titre={lien}>
            </HeaderLink>
        )
    })

    return(
        <div id="headerBreadcrumb" className="mt-2">
            <ol className="flex flex-row flex-wrap gap-1 sm:gap-0">
                { linksMap }
            </ol>
        </div>
    )
}

export default HeaderBreadcrumb