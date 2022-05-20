import { useAuth } from "../../context/AuthContext"

const SidebarProfil = () => {
    console.log("%cForum -- Sidebar -- SidebarElement -- SidebarProfil", 'background: white; color: darkgreen;')
    const { currentUser, logout } = useAuth()

    return(
        <div className="flex justify-start items-center gap-3">
            <a href="/">
                <img className="avatar" src={currentUser.imgSrc} alt="Un avatar"/>
            </a>
            <div>
                <h4>
                    <a className="text-purpleColor break-all" href="/">{currentUser.pseudo}</a>
                </h4>
                <span className="text-purpleColor font-normal cursor-pointer" onClick={() => logout()}>Déconnexion</span>
            </div>
        </div>
    )
}

export default SidebarProfil