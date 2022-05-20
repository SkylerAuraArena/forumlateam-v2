import React from 'react'

const Recaptcha = () => {
    console.log("%cRecaptcha", 'background: darkgreen; color: white;')
    const css_iframe = `iFrame block absolute top-0 bottom-2 overflow-hidden transform duration-300 ease-in-out hover:-translate-x-44`
    const iframe_scr = "https://www.google.com/recaptcha/api2/anchor?ar=2&k=6LeDUrYZAAAAAKrevKpcgs_cLwcMj2fMEgcuAKSQ&co=aHR0cHM6Ly9sYXRlYW0ubWlrZWNvZGV1ci5jb206NDQz&hl=fr&v=_7Co1fh8iT2hcjvquYJ_3zSP&size=invisible&cb=f86iiewfsd6r"

    return(
        <iframe className={css_iframe} src={iframe_scr} title="a-lgefsjyh700d" role="presentation" name="a-lgefsjyh700d" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
    )
}

export default Recaptcha