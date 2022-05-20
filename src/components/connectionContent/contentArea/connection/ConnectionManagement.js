import { useEffect, useState, memo } from "react"
import { useModalContext } from "../../../context/ModalContext"
import Button from "../../../parts/buttons/Button"
import { Link } from 'react-router-dom'
import { useMainContext } from "../../../context/MainContext"

const ConnectionManagement = (props) => {
    console.log("%cConnectionContent -- ContentArea -- ConnectionManagement", 'background: lightgreen; color: black;')
    const [ modalState, modalDispatch ] = useModalContext()
    const { mainContextDispatch } = useMainContext()
    const [loggedNameMsg, setLoggedNameMsg] = useState(props.user.email ? `Vous êtes connecté en tant que ${props.user.email}.` : `Vous n'êtes pas connecté.`)
    const cssBtn = "btnSite w-full"

    useEffect(() => {
        props.user?.email ? setLoggedNameMsg(`Vous êtes connecté en tant que ${props.user.email}.`) : setLoggedNameMsg(`Vous n'êtes pas connecté.`)
    }, [props.user])

    const handleClickLogout = () => {
        props.logout()
    }
    const handleClickChat = () => {
        modalState.modalChatOpen ? modalDispatch({modalChatOpen : false}) : modalDispatch({modalChatOpen : true})
    }
    const handleClickLink = e => {
        const target = e.target.textContent
        if(target === "Accéder au forum"){
            mainContextDispatch({
                currentSiteLocation: "Forum"
            })
        }
    }

    // function LoginPage() {
    //     let navigate = useNavigate();
    //     let location = useLocation();
    //     let auth = useAuth();
      
    //     let from = location.state?.from?.pathname || "/";
      
    //     function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //       event.preventDefault();
      
    //       let formData = new FormData(event.currentTarget);
    //       let username = formData.get("username") as string;
      
    //       auth.signin(username, () => {
    //         // Send them back to the page they tried to visit when they were
    //         // redirected to the login page. Use { replace: true } so we don't create
    //         // another entry in the history stack for the login page.  This means that
    //         // when they get to the protected page and click the back button, they
    //         // won't end up back on the login page, which is also really nice for the
    //         // user experience.
    //         navigate(from, { replace: true });
    //       });
    //     }
      
    //     return (
    //       <div>
    //         <p>You must log in to view the page at {from}</p>
      
    //         <form onSubmit={handleSubmit}>
    //           <label>
    //             Username: <input name="username" type="text" />
    //           </label>{" "}
    //           <button type="submit">Login</button>
    //         </form>
    //       </div>
    //     );
    //   }

    return(
        <div className="flex flex-col justify-center items-center gap-6 mb-6 mx-4">
            <h2 className="px-4 text-center">{loggedNameMsg}</h2>
            {props.user && <Button css="btnSite" function={()=>handleClickLogout()}>Déconnexion</Button>}
            <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
                {props.user && <Button css={cssBtn} function={()=>handleClickChat()}>Accéder au chat</Button>}
                {props.user && <Link className={cssBtn} to="/forum" onClick={handleClickLink}>Accéder au forum</Link>}
            </div>
        </div>
    )
}

export default memo(ConnectionManagement)