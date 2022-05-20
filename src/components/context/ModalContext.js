import { createContext, useContext, useReducer, useMemo } from 'react'

export const ModalContext = createContext()

const reducer = (state, action) => ({...state, ...action})

const ModalProvider = (props) => {
    console.log("%cModalContext", 'background: darkblue; color: white;')
    const cssModalContact = "modal modalContact"
    const cssModalContactDisplay = `${cssModalContact} modalContact-display`
    const cssModalContactHidden = `${cssModalContact} modalContact-hidden`
    const cssModalChat = "modal modalChat"
    const cssModalChatDisplay = `${cssModalChat} modalChat-display`
    const cssModalChatHidden = `${cssModalChat} modalChat-hidden`

    const [modalState, modalDispatch] = useReducer(reducer, {
        modalContactOpen : false,
        modalChatOpen : false,
        cssModalContact : cssModalContact,
        cssModalContactDisplay : cssModalContactDisplay,
        cssModalContactHidden : cssModalContactHidden,
        cssModalChat : cssModalChat,
        cssModalChatDisplay : cssModalChatDisplay,
        cssModalChatHidden : cssModalChatHidden,
        modalChatCss: ["backdrop backdrop-hidden",cssModalChatHidden],
        modalContactCss: ["backdrop backdrop-hidden",cssModalContactHidden],
        yPosition: 0-window.scrollY,
      })

    const values = useMemo(() => ({
        modalState, modalDispatch,
    }),[modalState])

    return(
        <ModalContext.Provider value={values} {...props} />
    )
}
export default ModalProvider

export const useModalContext = () => {
    console.log("%cModalContext -- useModalContext", 'background: blue; color: white;')

    const context = useContext(ModalContext)
    if(!context){
        throw new Error('useModalContext doit être utilisé avec App.js.')
    }
    return [context.modalState, context.modalDispatch]
}