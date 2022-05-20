import { createContext, useContext, useMemo, useEffect, useReducer } from 'react'
import { useAuth } from './AuthContext'
import { useForum } from './ForumContext'

export const MainContext = createContext()

const reducer = (state, action) => ({...state, ...action})

const MainProvider = (props) => {
    console.log("%cMainContext", 'background: darkblue; color: white;')
    const { forumState } = useForum()
    const [mainContextState, mainContextDispatch] = useReducer(reducer, {
        currentSiteLocation: '',
        pathName: `/Accueil`,
        pathMatch: `/Accueil`,
        liensInternesConnected: {
            forum:{
                titre: "Forum",
                lien: "https://lateam.mikecodeur.com/forums/",
            },
            blog:{
                titre: "Blog",
                lien: "https://lateam.mikecodeur.com/category/blog/",
            },
            profil:{
                titre: "Profil",
                lien: "https://lateam.mikecodeur.com/profile/",
            },
            membres:{
                titre: "Membres",
                lien: "https://lateam.mikecodeur.com/membres/",
            },
            activites:{
                titre: "Activités",
                lien: "https://lateam.mikecodeur.com/activites-du-site/",
            },
            ressources:{
                titre: "Ressources",
                lien: "https://lateam.mikecodeur.com/category/ressources/",
            },
        },
        liensInternesNotConnected: {
            forum:{
                titre: "Forum",
                lien: "https://lateam.mikecodeur.com/forums/",
            },
            blog:{
                titre: "Blog",
                lien: "https://lateam.mikecodeur.com/category/blog/",
            },
            ressources:{
                titre: "Ressources",
                lien: "https://lateam.mikecodeur.com/category/ressources/",
            },
        },
    })
    
    useEffect(() => {
        const newSearch = forumState.mainContentSearch
        const newSpecialTopic = forumState.displaySpecialTopics
        const newRubrique = forumState.currentRubrique
        const newTopic = forumState.currentTopic
        let newPath = ""
        let newPathMatch = ""
        if(newSpecialTopic === "hot"){
            newPath = `/Accueil/${mainContextState.currentSiteLocation}/Sujets populaires`
            newPathMatch = `/Accueil/${mainContextState.currentSiteLocation}/Sujets populaires`   
        } else if(newSpecialTopic === "noRes"){
            newPath = `/Accueil/${mainContextState.currentSiteLocation}/Sujets sans réponse`
            newPathMatch = `/Accueil/${mainContextState.currentSiteLocation}/Sujets sans réponse`    
        } else if(newSearch !== ""){
            newPath = `/Accueil/${mainContextState.currentSiteLocation}/Résultats de la recherche sur « ${newSearch} »`
            newPathMatch = `/Accueil/${mainContextState.currentSiteLocation}/Résultats de la recherche sur « ${newSearch} »`            
        } else if(newRubrique !== "" && newTopic !== ""){
            newPath = `/Accueil/${mainContextState.currentSiteLocation}/${forumState.rubriques[newRubrique].title}/${forumState.topics[newTopic].title}`
            newPathMatch = `/Accueil/${mainContextState.currentSiteLocation}/${newRubrique}/${newTopic}`
        } else if(newRubrique !== "" && newTopic === ""){
            newPath = `/Accueil/${mainContextState.currentSiteLocation}/${forumState.rubriques[newRubrique].title}`
            newPathMatch = `/Accueil/${mainContextState.currentSiteLocation}/${newRubrique}`
        } else if(newRubrique === "" && newTopic === "" && mainContextState.currentSiteLocation !== ""){
            newPath = `/Accueil/${mainContextState.currentSiteLocation}`
            newPathMatch = `/Accueil/${mainContextState.currentSiteLocation}`
        } else if(newRubrique === "" && newTopic === "" && mainContextState.currentSiteLocation === ""){
            newPath = `/Accueil`
            newPathMatch = `/Accueil`
        }
        mainContextDispatch({
            pathName: `${newPath}`,
            pathMatch: `${newPathMatch}`,
        })
    }, [forumState, mainContextState.currentSiteLocation])
    
    const values = useMemo(() => ({
        mainContextState, mainContextDispatch,
    }),[mainContextState])

    return(
        <MainContext.Provider value={values} {...props} />
    )
}
export default MainProvider

export const useMainContext = () => {
    console.log("%cMainContext -- useMainContext", 'background: blue; color: white;')

    const context = useContext(MainContext)
    if(!context){
        throw new Error('useRubrique doit être utilisé avec MainProvider.')
    }
    return context
}

export const usePath = () => {
    console.log("%cMainContext -- usePath", 'background: blue; color: white;')

    const context = useContext(MainContext)
    if(!context){
        throw new Error('usePath doit être utilisé avec MainProvider.')
    }
    const pathNames = context.mainContextState.pathName.split("/").filter(x => x)
    const pathMatches = context.mainContextState.pathMatch.split("/").filter(x => x)
    return [pathNames, pathMatches]
}

export const useLiensInternes = () => {
    console.log("%cMainContext -- useLiensInternes", 'background: blue; color: white;')

    const context = useContext(MainContext)
    if(!context){
        throw new Error('useRubrique doit être utilisé avec ForumProvider.')
    }

    const { currentUser } = useAuth()
    const liensInternes = currentUser ? context.mainContextState.liensInternesConnected : context.mainContextState.liensInternesNotConnected  
    return liensInternes
}