import Inscription from "./connection/Inscription"
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Login from "./connection/Login"
import Displayer from "./connection/Displayer"
import Loader from "./connection/Loader"
import ConnectionManagement from "./connection/ConnectionManagement"

const ContentArea = () => {
    console.log("%cConnectionContent -- ContentArea", 'background: green; color: white;')
    const { currentUser, loading, setLoading, logout } = useAuth()
    const [displayDisplayer, setDisplayDisplayer] = useState(true)
    const [mode, setMode] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    useEffect(() => {
        currentUser ? setDisplayDisplayer(false) : setDisplayDisplayer(true)
    }, [currentUser])

    const handleClickDisplayer = (mode) => {
        if(mode === "inscription"){
            setMode("inscription")
        }else if(mode === "connexion"){
            setMode("connexion")
        }
        setDisplayDisplayer(false)
    }

    return(
        <div className="flex flex-col justify-center items-center pb-16">
            {loading && <Loader />}
            {!loading && currentUser && <ConnectionManagement user={currentUser.user} logout={logout}/>}
            {!loading && displayDisplayer && !currentUser && <Displayer setDisplayDisplayer={setDisplayDisplayer} setMode={handleClickDisplayer}/>}
            {!loading && !displayDisplayer && mode==="inscription" && !currentUser && <Inscription setMode={handleClickDisplayer}/>}
            {!loading && !displayDisplayer && mode==="connexion" && !currentUser && <Login setMode={handleClickDisplayer}/>}
        </div>
    )
}

export default ContentArea