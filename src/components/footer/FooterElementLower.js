const FooterElementLower = () => {
    const css_div = `text-lg text-center mx-auto w-11/12`
    const spanTxt = ` La Team ™ - Les ressources privées de Mike Codeur. `

    return(
        <div className={css_div}>
            <span className="leading-6">{spanTxt}</span>
        </div>
    )
}

export default FooterElementLower