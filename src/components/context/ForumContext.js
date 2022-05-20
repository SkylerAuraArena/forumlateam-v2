import { createContext, useContext, useReducer, useMemo, useEffect } from 'react'

const reducer = (state, action) => ({...state, ...action})

export const ForumContext = createContext()

const ForumProvider = (props) => {
    console.log("%cForumContext", 'background: darkblue; color: white;')
    const [forumState, forumDispatch] = useReducer(reducer, {
        sideBarSearch : "",
        mainContentSearch: "",
        currentRubrique: "",
        currentTopic: "",
        displaySpecialTopics: "",
        rubriques:{
            feedback : {
                title: "Demander un feedback",
                description: "Pour demander un feedback sur votre travail à LA Team (page de vente, page de capture, vidéo, etc.",
                topics: 0,
                messages: 0,
            },
            general:{
                title: "Discussion Générale",
                description: "Discussions générales",
                topics: 0,
                messages: 0,
            },
            cases:{
                title: "Études de cas",
                description: "Partagez avec nous vos pages et contenu pour lesquels vous souhaitez que l'on fasse une étude de cas",
                topics: 0,
                messages: 0,
            },
            log:{
                title: "Journal de bord",
                description: "Partagez vos actions quotidiennes ou hebdomadaires avec la Team",
                topics: 0,
                messages: 0,
            },
            bootcamp:{
                title: "React Mastery",
                description: "Commencez ici",
                topics: 0,
                messages: 0,
            },
            advice:{
                title: "Recommander du contenu",
                description: "Recommander du contenu intéressant à la Team (formations, vidéos, livres, podcasts etc.).",
                topics: 0,
                messages: 0,
            },
            private:{
                title: "Privé : Groupes de travail",
                description: "Retrouver vos groupes de travail ici",
                topics: 0,
                messages: 0,
            },
        },
        topics:{
            topic1 : {
                rubrique: "general",
                pinned: true,
                title: "Présentation",
                author: "Admin",
                tags: ["Tag1", "Tag2", "Tag3", "Tag4"] ,
                members: 0,
                messages: 0,
            },
            topic2 : {
                rubrique: "general",
                pinned: false,
                title: "Discussion générale",
                author: "Admin",
                tags: [],
                members: 0,
                messages: 0,
            },
            topic3 : {
                rubrique: "feedback",
                pinned: false,
                title: "Un sujet de plus",
                author: "Admin",
                tags: [],
                members: 0,
                messages: 0,
            },
            topic4 : {
                rubrique: "log",
                pinned: true,
                title: "Un autre sujet de plus",
                author: "Admin",
                tags: [],
                members: 0,
                messages: 0,
            },
        },
        messages:{
            message1:{
                rubrique: "general",
                topic: "topic1",
                date :  "12 janvier 2022 à 12 h 13 min",
                msgId :  "0000",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Bonjour, voici un message.`,
                lastModification: "12 janvier 2022 à 12 h 13 min",
            },
            message2:{
                rubrique: "general",
                topic: "topic1",
                date :  "16 janvier 2022 à 20 h 14 min",
                msgId :  "0001",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Anonyme",
                title :  "Participant",
                msg :  `Bonjour, voici un autre message.`,
                lastModification :  "16 janvier 2022 à 20 h 14 min",
            },
            message3:{
                rubrique: "general",
                topic: "topic2",
                date :  "17 janvier 2022 à 00 h 22 min",
                msgId :  "0002",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Bonjour, voici un message.`,
                lastModification :  "18 janvier 2022 à 23 h 05 min",
            },
            message4:{
                rubrique: "general",
                topic: "topic2",
                date :  "24 janvier 2022 à 22 h 10 min",
                msgId :  "0003",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `WAAAAAAAAAAAAZZZZZZZZZZZZZZAAAAAAAAAAA`,
                lastModification :  "24 janvier 2022 à 22 h 10 min",
            },
            message5:{
                rubrique: "general",
                topic: "topic2",
                date :  "24 janvier 2022 à 22 h 30 min",
                msgId :  "0004",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Stop au flood !`,
                lastModification :  "24 janvier 2022 à 22 h 30 min",
            },
            message6:{
                rubrique: "general",
                topic: "topic1",
                date :  "24 janvier 2022 à 22 h 30 min",
                msgId :  "0005",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Bienvenue à tous !`,
                lastModification :  "24 janvier 2022 à 22 h 30 min",
            },
            message7:{
                rubrique: "general",
                topic: "topic1",
                date :  "24 janvier 2022 à 22 h 55 min",
                msgId :  "0006",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Et bonne bourre !`,
                lastModification :  "24 janvier 2022 à 22 h 56 min",
            },
            message8:{
                rubrique: "feedback",
                topic: "topic3",
                date :  "25 janvier 2022 à 14 h 32 min",
                msgId :  "0007",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Je n'ai plus d'idée de message.`,
                lastModification :  "25 janvier 2022 à 14 h 32 min",
            },
            message9:{
                rubrique: "log",
                topic: "topic4",
                date :  "25 janvier 2022 à 14 h 32 min",
                msgId :  "0008",
                imgSrc : "//www.gravatar.com/avatar/28d8a1def414df109d3cdc226b381255?s=40&r=g&d=monsterid",
                author :  "Admin",
                title :  "Maître des clefs",
                msg :  `Toujours pas d'idée.`,
                lastModification :  "25 janvier 2022 à 14 h 32 min",
            },
        },
        searchMessagesList: null,
        last5Messages:  null,
        lastMessageId: null,
    })    

    useEffect(() => {
        const messagesList = Object.keys(forumState.messages).map(message => (       
            forumState.messages[message].msg.includes(forumState.mainContentSearch) && forumState.messages[message]
        ))
        forumDispatch({
            searchMessagesList: messagesList,
        })
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [forumState.mainContentSearch])

    useEffect(() => {
        const topicsListArray = {...forumState.topics}
        const rubriquesListArray = {...forumState.rubriques}
        const lastMessagesList = []
        const membersList = []
        const rubriqueList = []

        Object.keys(forumState.messages).map(message => {    
            rubriquesListArray[forumState.messages[message].rubrique].messages = 0
            topicsListArray[forumState.messages[message].topic].messages = 0
            return null
        })
        Object.keys(forumState.messages).map((message, index) => {    
            if(index >= Object.keys(forumState.messages).length - 5){
                lastMessagesList.push(forumState.messages[message])
            }
            membersList.push([forumState.messages[message].topic,forumState.messages[message].author])
            rubriqueList.push([forumState.messages[message].topic,forumState.messages[message].rubrique])
            rubriquesListArray[forumState.messages[message].rubrique].messages ++
            topicsListArray[forumState.messages[message].topic].messages ++
            return null
        })

        let counts = {}
        for (const num of membersList) {
            counts[num] = counts[num] ? counts[num] + 1 : 1
        }
        Object.keys(counts).map(topic => {
            const target = topic.split(',')
            topicsListArray[target[0]].members = 0
            return null
        })
        Object.keys(counts).map(topic => {
            const target = topic.split(',')
            topicsListArray[target[0]].members ++
            return null
        })

        counts = {}
        for (const num of rubriqueList) {
            counts[num] = counts[num] ? counts[num] + 1 : 1
        }
        Object.keys(counts).map(topic => {
            const target = topic.split(',')
            rubriquesListArray[target[1]].topics = 0
            return null
        })
        Object.keys(counts).map(topic => {
            const target = topic.split(',')
            rubriquesListArray[target[1]].topics ++
            return null
        })

        forumDispatch({
            last5Messages: lastMessagesList.reverse(),
            rubriques: rubriquesListArray,
            topics: topicsListArray,
        })
    }, [forumState.messages])

    useEffect(() => {
        forumDispatch({
            displaySpecialTopics: "",
        })
    }, [forumState.currentRubrique, forumState.currentTopic, forumState.mainContentSearch, forumState.sideBarSearch])
    
    const values = useMemo(() => ({
        forumState, forumDispatch,
    }),[forumState])

    return(
        <ForumContext.Provider value={values} {...props} />
    )
}
export default ForumProvider

export const useForum = () => {
    console.log("%cForumContext -- useForum", 'background: blue; color: white;')

    const context = useContext(ForumContext)
    if(!context){
        throw new Error('useForum doit être utilisé avec ForumProvider.')
    }
    return context
}