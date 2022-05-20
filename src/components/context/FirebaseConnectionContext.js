import { createContext, useContext, useMemo } from 'react'
import { auth } from '../../firebase-confg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from '../../firebase-confg'
import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const FirebaseConnectionContext = createContext()

const FirebaseConnectionProvider = (props) => {
    console.log("%cFirebaseConnectionContext", 'background: darkblue; color: white;')
    const [user] = useAuthState(auth)

    const values = useMemo(() => ({
        user,
    }),[user])

    return(
        <FirebaseConnectionContext.Provider value={values} {...props} />
    )
}
export default FirebaseConnectionProvider

export const useFirebaseConnectionContext = () => {
    console.log("%cFirebaseConnectionContext -- useFirebaseConnectionContext", 'background: blue; color: white;')

    const context = useContext(FirebaseConnectionContext)
    if(!context){
        throw new Error('useFirebaseConnectionContext doit être utilisé avec Chat.js')
    }

    return context
}

export const  useFirebaseChatFetch = () => {
    console.log("%cFirebaseConnectionContext -- useFirebaseChatFetch", 'background: blue; color: white;')
    
    const messageRef = useMemo(() => collection(db, "messages"),[])
    const newQuery = useMemo(() => query(messageRef, orderBy("date")),[messageRef])
    const [messages] = useCollectionData(newQuery, {idField: 'id'})

    return [messageRef, messages]
}