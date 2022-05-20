import { withFormik } from 'formik'
import { useEffect, useRef, useReducer, useCallback } from 'react'
import * as Yup from 'yup'
import Button from '../../parts/buttons/Button';
import ModalContactFormulaireElement from './ModalContactFormulaireElement';

const reducer = (state, action) => ({...state, ...action})

const ModalContactFormulaire = (props) => {
    console.log("%cModalChat -- Formulaire", 'background: white; color: darkgreen;')
    const nameRef = useRef()
    const nameErrorRef = useRef()
    const emailRef = useRef()
    const emailErrorRef = useRef()
    const messageRef = useRef()
    const loaderRef = useRef()
    const loaderWrapRef = useRef()
    const boxRef = useRef()

    const [modalFormState, modalFormDispatch] = useReducer(reducer, {
        hideNameError: true,
        nameError: "",
        nameErrorPlaceholder : "",
        hideEmailError: true,
        emailError: "",
        emailErrorPlaceholder : "",
        boxMsg : "One or more fields have an error. Please check and try again.",
    })

    const spanErrorDisplayed = "modalSpanError modalSpanErrorDisplayed"
    const spanErrorFaded = "modalSpanError modalSpanErrorFaded"
    const spanErrorHidden = "modalSpanError modalSpanErrorHidden"
    // const timeOutDelay = 1500;

    const handleClickSubmit = useCallback(() => {        
        let newNameError = false
        let newEmailError = false
        function displayErrorsAndLoader() {
            const errors = props.errors ?? null
            if (nameRef.current.value === "") {
                nameErrorRef.current.className = spanErrorDisplayed
                newNameError = true
                modalFormDispatch({
                    hideNameError : false,
                    nameError : newNameError,
                    nameErrorPlaceholder : "Le champ est obligatoire"
                })
            } else if(errors.name){
                nameErrorRef.current.className = spanErrorDisplayed
                newNameError = true
                modalFormDispatch({
                    hideNameError : false,
                    nameError : newNameError,
                    nameErrorPlaceholder : props.errors.name
                })
            }
            if (emailRef.current.value === "") {
                emailErrorRef.current.className = spanErrorDisplayed
                newEmailError = true
                modalFormDispatch({
                    hideEmailError : false,
                    emailError : newEmailError,
                    emailErrorPlaceholder : "Le champ est obligatoire"
                })
            } else if(errors.email){
                emailErrorRef.current.className = spanErrorDisplayed
                newEmailError = true
                modalFormDispatch({
                    hideEmailError : false,
                    emailError : newEmailError,
                    emailErrorPlaceholder : props.errors.email
                })
            }
            displayLoader()
            displayBox(newNameError, newEmailError)
        }

        function displayBox(nameError = false, emailError = false){
            if(nameError || emailError){
                boxRef.current.className = "formResultDiv formResultDiv-invalid"
                modalFormDispatch({
                    boxMsg : "One or more fields have an error. Please check and try again."
                })
            } else {
                boxRef.current.className = "formResultDiv formResultDiv-valid"
                nameRef.current.value = ""
                emailRef.current.value = ""
                messageRef.current.value = ""
                modalFormDispatch({
                    boxMsg : "Votre demande a bien été transmise."
                })
                
            }
        }
        function displayLoader() {
            boxRef.current.className = "formResultDiv formResultDiv-hidden"
            const className = loaderRef.current.className
            if(className === "ajaxLoader"){
                loaderRef.current.className=`ajaxLoader hidden`
                loaderWrapRef.current.className = "ajaxLoaderWrap ajaxLoaderWrap-hidden"
            } else {
                loaderRef.current.className=`ajaxLoader`
                loaderWrapRef.current.className = "ajaxLoaderWrap"
            }
        }

        displayLoader()
        displayErrorsAndLoader()
        // setTimeout(displayErrorsAndLoader,timeOutDelay)
    },[props.errors])

    const handleClickHideErrors = useCallback((error) => {
        switch (error) {
            case "name":
                modalFormDispatch({hideNameError : true})
                break;
            case "email":
                modalFormDispatch({hideEmailError : true})
                break;
            default:
                throw new Error ("Erreur non prise en compte")
        }
    },[])
    useEffect(() => {
        console.log("%cModalChat -- Formulaire -- UE1", 'background: white; color: darkgreen;')
        if(modalFormState.hideNameError){
            nameErrorRef.current.className = spanErrorFaded
            setTimeout(() => {
                nameErrorRef.current.className = spanErrorHidden
            }, 350);
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [modalFormState.hideNameError])
    useEffect(() => {
        console.log("%cModalChat -- Formulaire -- UE2", 'background: white; color: darkgreen;')
        if(modalFormState.hideEmailError){
            emailErrorRef.current.className = spanErrorFaded
            setTimeout(() => {
                emailErrorRef.current.className = spanErrorHidden
            }, 350);
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [modalFormState.hideEmailError])

    return(
        <div className="px-12 pb-5 pt-0">
            <p role="status" aria-live="polite" aria-atomic="true"></p>
            <form className="flex justify-center flex-row flex-wrap gap-2.5 min-w-min" action="/forums/" method='post' noValidate="novalidate" data-status="init">
                <ModalContactFormulaireElement 
                    typeDiv="input"
                    type="text"
                    refElt={nameRef}
                    className="form-control"
                    idElt="InputName"
                    name='name'
                    describe="nameHelp"
                    placeholder="Votre nom"
                    function={props.setFieldValue}
                    errorRef={nameErrorRef}
                    errorFunction={handleClickHideErrors}
                    errorHidden={spanErrorHidden}
                    errorPlaceholder={modalFormState.nameErrorPlaceholder}
                />
                <ModalContactFormulaireElement 
                    typeDiv="input"
                    type="email"
                    refElt={emailRef}
                    className="form-control"
                    idElt="InputEmail"
                    name='email'
                    describe="emailHelp"
                    placeholder="Votre email"
                    function={props.setFieldValue}
                    errorRef={emailErrorRef}
                    errorFunction={handleClickHideErrors}
                    errorHidden={spanErrorHidden}
                    errorPlaceholder={modalFormState.emailErrorPlaceholder}
                />
                <ModalContactFormulaireElement 
                    typeDiv="textArea"
                    refElt={messageRef}
                    className="form-control form-control-message"
                    idElt="InputMessage"
                    name='message'
                    describe="messageHelp"
                    placeholder="Votre message"
                    function={props.setFieldValue}
                />              
                <Button css="btnSite w-full" function={()=>handleClickSubmit()}>Envoyer le message</Button>
                <div ref={loaderWrapRef} className='ajaxLoaderWrap'>
                    <div ref={loaderRef} className='ajaxLoader hidden'></div>
                </div>
                <div ref={boxRef} className='formResultDiv formResultDiv-hidden' aria-hidden="true">
                    { modalFormState.boxMsg }
                </div>
            </form>
        </div>
    )
}
export default withFormik({
    mapPropsToValues:()=>({
        name:'',
        email:'',
        message:''
    }),
    validationSchema:Yup.object().shape({
        name: Yup.string()
                    .required('Le champ est obligatoire')
                    .min(3,'Il faut plus de 3 caractères')
                    .max(30,'Il faut moins de 30 caractères'),
        email: Yup.string()
                    .required('Le champ est obligatoire')
                    .min(3,'Il faut plus de 3 caractères')
                    .max(30,'Il faut moins de 30 caractères')
                    .email('Vous devez entrer une adresse email valide'),
    }),
    handleSubmit:(values,{props})=>{
        props.fonction(values.name,values.email,values.message)
    }
})(ModalContactFormulaire)