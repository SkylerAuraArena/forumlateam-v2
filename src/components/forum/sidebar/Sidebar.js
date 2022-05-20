import SidebarElement from "./SidebarElement"
import SidebarLastTopics from "./SidebarLastTopics"
import SidebarOtherTopics from "./SidebarOtherTopics"
import SidebarProfil from "./SidebarProfil"
import SidebarSearch from "./SidebarSearch"

const Sidebar = () => {
    console.log("%cForum -- Sidebar", 'background: green; color: white;')
    const cssDiv = `flex flex-col justify-center items-center w-full mb-4 px-4 lg:w-4/12 lg:mb-20`

    return(
        <div className={cssDiv}>
            <SidebarElement title="Chercher dans les Forums" element={<SidebarSearch />}/>
            <SidebarElement title="Mon Profil" element={<SidebarProfil />}/>
            <SidebarElement title="Réponses récentes" element={<SidebarLastTopics />}/>
            <SidebarElement title="" element={<SidebarOtherTopics />}/>
        </div>
    )
}

export default Sidebar