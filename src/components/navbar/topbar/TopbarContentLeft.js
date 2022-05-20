import logoTwitter from "../../../assets/images/logo-twitter.svg"
import logoFacebook from "../../../assets/images/logo-facebook.svg"
import logoInstagram from "../../../assets/images/logo-instagram.svg"
import logoSpotify from "../../../assets/images/logo-spotify.svg"
import logoYoutube from "../../../assets/images/logo-youtube.svg"
import TopbarImage from './TopbarImage'
import { memo } from 'react'


const TopbarContentLeft = () => {
    console.log("%cNavbar -- Topbar -- TopbarContent -- Left", 'background: white; color: darkgreen;')
    
    const liensExternes = {
        twitter:{
            nom: "logo-Twitter",
            lien: "https://twitter.com/MikeCodeur",
            logo: logoTwitter,
            cssBorder: "border-r borderGreyColor",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        instagram:{
            nom: "logo-Instagram",
            lien: "https://www.instagram.com/mikecodeur/",
            logo: logoInstagram,
            cssBorder: "border-r borderGreyColor",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        facebook:{
            nom: "logo-Facebook",
            lien: "https://www.facebook.com/MikeCodeur",
            logo: logoFacebook,
            cssBorder: "border-r borderGreyColor",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        spotify:{
            nom: "logo-Spotify",
            lien: "https://open.spotify.com/show/4JKOuoYNI59P6hpHaMHZI8",
            logo: logoSpotify,
            cssBorder: "border-r borderGreyColor",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        youtube:{
            nom: "logo-Youtube",
            lien: "https://www.youtube.com/mikecodeurnomade",
            logo: logoYoutube,
            cssBorder: "",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
    }

    const linksMap = Object.keys(liensExternes).map(lien => (
        <TopbarImage
            key={liensExternes[lien].nom}
            logoName={liensExternes[lien].nom}
            linkAddress={liensExternes[lien].lien}
            imgSrc={liensExternes[lien].logo}
            cssBorder={liensExternes[lien].cssBorder}
            imgAlt={liensExternes[lien].alt}>
        </TopbarImage>
    ))

    return(
        <div className="border-r border-l borderGreyColor ml-3.5 px-1">
            <div className="-mx-1">
                <ul className="flex mb-2.5">
                    {linksMap}
                </ul>
            </div>
        </div>
    )
}

export default memo(TopbarContentLeft)