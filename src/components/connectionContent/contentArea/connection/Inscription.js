import { withFormik } from 'formik'
import { useEffect, useRef, useState, useReducer } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../../context/AuthContext'
import Button from '../../../parts/buttons/Button'

const reducer = (state, action) => ({...state, ...action})

const Authentification = (props) => {
    console.log("%cConnectionContent -- ContentArea -- Inscription", 'background: lightgreen; color: black;')
    const { register } = useAuth()
    const [initialized, setInitialized] = useState(false)
    const [nameErrorPlaceholder, setNameErrorPlaceholder] = useState("")
    const [passwordErrorPlaceholder, setPasswordErrorPlaceholder] = useState("")
    const [passwordMsg, setPasswordMsg] = useState("")
    const [errorBoxCss, setErrorBoxCss] = useState("formResultDiv formResultDiv-hidden")
    const [loaderWrapCss, setLoaderWrapCss] = useState("ajaxLoaderWrap ajaxLoaderWrap-hidden")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasError, setHasError] = useState("")

    const nameRef = useRef()
    const nameErrorRef = useRef()
    const passwordRef = useRef()
    const passwordErrorRef = useRef()
    const loaderRef = useRef()
    const errorBoxRef = useRef()

    const [modalFormState, modalFormDispatch] = useReducer(reducer, {
        hideNameError: true,
        nameError: "",
        hidePasswordError: true,
        passwordError: "",
    })

    const spanErrorDisplayed = "modalSpanError modalSpanErrorDisplayed"
    const spanErrorFaded = "modalSpanError modalSpanErrorFaded"
    const spanErrorHidden = "modalSpanError modalSpanErrorHidden"

    useEffect(() => {
        if(isSubmitting) {
            setLoaderWrapCss(`ajaxLoaderWrap`)
            setErrorBoxCss("formResultDiv formResultDiv-hidden")
        } else {
            setLoaderWrapCss(`ajaxLoaderWrap ajaxLoaderWrap-hidden`)
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isSubmitting])

    useEffect(() => {
        hasError !== "" && displayErrorBox(true,hasError)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [hasError])

    function displayErrorBox(passwordError = false, serverRes = ""){
        passwordError ? setErrorBoxCss("formResultDiv formResultDiv-invalid mt-2") : setErrorBoxCss("formResultDiv formResultDiv-hidden")
        serverRes === "" ? setPasswordMsg(<span>Votre mot de passe doit au moins contenir les informations suivantes : <br/>--Huit caractères dont un caractère spécial <br/>--Une majuscule <br/>--Un chiffre</span>) : setPasswordMsg(serverRes)
    }
    function displayValidBox(){
        setErrorBoxCss("formResultDiv formResultDiv-valid mt-2")
        setPasswordMsg(`Inscription réussie. Veuillez patienter, vous allez être redirigé.`)
    }

    const handleClickSubmit = () => {         
        function displayErrorsAndLoader() {
            let nameError = false
            let passwordError = false
            const errors = props.errors ?? null
            if (nameRef.current.value === "") {
                nameErrorRef.current.className = spanErrorDisplayed
                setNameErrorPlaceholder("Le champ est obligatoire")
                modalFormDispatch({hideNameError : false})
                nameError = true
            } else if(errors.name){
                nameErrorRef.current.className = spanErrorDisplayed
                setNameErrorPlaceholder(props.errors.name)
                modalFormDispatch({hideNameError : false})
                nameError = true
            }
            
            if (passwordRef.current.value === "") {
                passwordErrorRef.current.className = spanErrorDisplayed
                setPasswordErrorPlaceholder("Le champ est obligatoire")
                modalFormDispatch({hidePasswordError : false})
                passwordError = true
            } else if(errors.password){
                passwordErrorRef.current.className = spanErrorDisplayed
                setPasswordErrorPlaceholder(props.errors.password)
                modalFormDispatch({hidePasswordError : false})
                passwordError = true
            }
            if(nameError || passwordError){
                displayErrorBox(passwordError,"")
            } else {
                setIsSubmitting(true)
                register(nameRef.current.value.trim(), passwordRef.current.value.trim())
                .then(() => {
                    displayValidBox()
                })
                .catch((error) => {
                    setHasError(error.message)
                })
                .finally(() => {
                    setIsSubmitting(false)
                })
            }
        }
        
        const myElement = document.getElementById('headerScrollingDiv')
        myElement.scrollIntoView({behavior: "smooth"})
        displayErrorsAndLoader()
    }

    const handleClickHideErrors = (error) => {
        switch (error) {
            case "name":
                modalFormDispatch({hideNameError : true})
                break;
            case "password":
                modalFormDispatch({hidePasswordError : true})
                break;
            default:
                throw new Error ("Erreur non prise en compte")
        }
    }
    useEffect(() => {
        if(initialized) {
            if(modalFormState.hideNameError){
                nameErrorRef.current.className = spanErrorFaded
                setTimeout(() => {
                    nameErrorRef.current.className = spanErrorHidden
                }, 350);
            }
        }
        !initialized && setInitialized(true)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [modalFormState.hideNameError])
    //Attention, le state initialized est géré dans le premier useEffect.
    useEffect(() => {
        if(initialized) {
            if(modalFormState.hidePasswordError){
                passwordErrorRef.current.className = spanErrorFaded
                setTimeout(() => {
                    passwordErrorRef.current.className = spanErrorHidden
                }, 350);
            }
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [modalFormState.hidePasswordError])

    return(
        <form className="wrapComponent" action="/forums/" method='post' noValidate="novalidate" data-status="init">
            <Button css="btnSite w-full mb-2" function={()=>props.setMode("connexion")}>Se connecter</Button>
            <div className="form-group">
                <input  
                    type="text" 
                    ref={nameRef}
                    className="form-control"
                    id="InputMailInscription"
                    name='name' 
                    aria-describedby="titleHelp" 
                    placeholder="Votre email"
                    onChange={(event)=>props.setFieldValue('name', event.target.value.trim())}
                    onBlur={props.handleBlur}
                    autoComplete="off"
                />
                <div ref={nameErrorRef} onClick={()=>handleClickHideErrors("name")} className={spanErrorHidden}>{nameErrorPlaceholder}</div>
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    ref={passwordRef}
                    className="form-control"
                    id="InputPassword" 
                    name='password'
                    aria-describedby="passwordHelp" 
                    placeholder="Votre mot de passe"
                    onChange={(event)=>props.setFieldValue('password', event.target.value.trim())}
                    onBlur={props.handleBlur}
                />
                <div ref={passwordErrorRef} onClick={()=>handleClickHideErrors("password")} className={spanErrorHidden}>{passwordErrorPlaceholder}</div>
            </div>
            <Button css="btnSite w-full" function={()=>handleClickSubmit()}>Inscription</Button>
            <div ref={loaderRef} className={loaderWrapCss}>
                <div className="ajaxLoader"></div>
            </div>
            <div ref={errorBoxRef} className={errorBoxCss} aria-hidden="true">
                {passwordMsg}
            </div>
        </form>
    )
}
export default withFormik({
    mapPropsToValues:()=>({
        name:'',
        password:'',
    }),
    validationSchema:Yup.object().shape({
        name: Yup.string()
                    .required('Le champ est obligatoire')
                    .min(3,'Il faut plus de 3 caractères')
                    .max(30,'Il faut moins de 30 caractères')
                    .email("Vous devez entrer une adresse email valide"),
        password: Yup.string()
                    .required('Le champ est obligatoire')
                    .matches(
                        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                        "Votre mot de passe n'est pas sécurisé"
                      ),
    }),
    handleSubmit:(values,{props})=>{
        props.fonction(values.name,values.password)
    }
})(Authentification)