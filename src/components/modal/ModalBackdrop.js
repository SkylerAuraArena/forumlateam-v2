const ModalBackdrop = ({ cssBackdrop, children, onClick }) => {
  console.log("%cBackdrop", 'background: darkgreen; color: white;')

  return(
    <div id="modalBackdrop" onClick={onClick} className={cssBackdrop}>
      {children}
    </div>
  )
}

export default ModalBackdrop