import logoTwitter from "../../../assets/images/logo-twitter.svg"
import logoFacebook from "../../../assets/images/logo-facebook.svg"
import logoInstagram from "../../../assets/images/logo-instagram.svg"
import logoSpotify from "../../../assets/images/logo-spotify.svg"
import logoYoutube from "../../../assets/images/logo-youtube.svg"
import ModalSocialsImage from "./ModalSocialsImage"
import { memo } from "react"

const ModalSocials = () => {
    console.log("%cModalContact -- Socials", 'background: lightgreen; color: black;')

    const liensExternes = {
        twitter:{
            nom: "logo-Twitter",
            lien: "https://twitter.com/MikeCodeur",
            logo: logoTwitter,
            cssImg: "",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        instagram:{
            nom: "logo-Instagram",
            lien: "https://www.instagram.com/mikecodeur/",
            logo: logoInstagram,
            cssImg: "",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        facebook:{
            nom: "logo-Facebook",
            lien: "https://www.facebook.com/MikeCodeur",
            logo: logoFacebook,
            cssImg: "",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        spotify:{
            nom: "logo-Spotify",
            lien: "https://open.spotify.com/show/4JKOuoYNI59P6hpHaMHZI8",
            logo: logoSpotify,
            cssImg: "",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
        youtube:{
            nom: "logo-Youtube",
            lien: "https://www.youtube.com/mikecodeurnomade",
            logo: logoYoutube,
            cssImg: "",
            get alt() {
                return `Logo : ${this.nom}`;
              }
        },
    }

    const linksMap = Object.keys(liensExternes).map(lien => (
        <ModalSocialsImage
            key={liensExternes[lien].nom}
            logoName={liensExternes[lien].nom}
            linkAddress={liensExternes[lien].lien}
            imgSrc={liensExternes[lien].logo}
            cssImg={liensExternes[lien].cssImg}
            imgAlt={liensExternes[lien].alt}>
        </ModalSocialsImage>
    ))


    return(
        <div className="ModalSocials flex justify-center items-center pb-20 sm:pb-0">
            <ul className="flex justify-center items-center gap-x-3">
                {linksMap}
            </ul>
        </div>
    )
}

export default memo(ModalSocials)