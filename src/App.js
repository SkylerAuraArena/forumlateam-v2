import { useEffect, useCallback } from 'react'
import { useModalContext } from "./components/context/ModalContext";
import { Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ConnectionContent from "./components/connectionContent/ConnectionContent";
import Modal from "./components/modal/Modal"
import Forum from './components/forum/Forum';
import Error404 from './components/Error404/Error404';
import Header from './components/connectionContent/header/Header';
import RequireAuth from './components/parts/access/RequireAuth';

function App() {
  console.log("%cApp.js", 'background: black; color: white;')
  const [modalState, modalDispatch] = useModalContext()

  useEffect(() => {
    console.log("%cApp.js -- UE", 'background: black; color: white;')
    const root = document.getElementsByTagName('html')[0];
    const newYPosition = 0 - window.scrollY
    const backdrop = modalState.modalChatOpen || modalState.modalContactOpen ? document.getElementById("modalBackdrop") : null
    if (modalState.modalChatOpen || modalState.modalContactOpen) {
      backdrop.style.setProperty('top', window.scrollY + "px")
      root.setAttribute('class', 'scrollLock')
      root.style.setProperty('top', `${newYPosition}px`);
      modalDispatch({
        modalChatCss: ["backdrop", modalState.cssModalChat],
        modalContactCss: ["backdrop", modalState.cssModalContact],
        yPosition: newYPosition
      })
      setTimeout(() => {
        modalDispatch({
          modalChatCss: ["backdrop", modalState.cssModalChatDisplay],
          modalContactCss: ["backdrop", modalState.cssModalContactDisplay],
        })
      }, 100);
    } else {
      root.removeAttribute('class', 'scrollLock')
      window.scrollTo(0, Math.abs(modalState.yPosition));
      modalDispatch({
        modalChatCss: ["backdrop", modalState.cssModalChatHidden],
        modalContactCss: ["backdrop", modalState.cssModalContactHidden],
        yPosition: newYPosition
      })
      setTimeout(() => {
        modalDispatch({
          modalChatCss: ["backdrop backdrop-hidden", modalState.cssModalContactHidden],
          modalContactCss: ["backdrop backdrop-hidden", modalState.cssModalChatHidden],
        })
      }, 290);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [modalState.modalContactOpen, modalState.modalChatOpen])

  const handleCloseModal = useCallback(() => {
    console.log("%cApp.js -- handleCloseModal", 'background: black; color: white;')
    modalDispatch({
      modalContactOpen: false,
      modalChatOpen: false,
    })
  }, [])

  return (
    <div className="box-border">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<ConnectionContent />}>
          <Route path="ForumLaTeam" element={<ConnectionContent />} />
          <Route path="forumlateam-v2" element={<ConnectionContent />} />
        </Route>
        <Route
          path="/forum"
          element={
            <RequireAuth>
              <Forum />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
      {modalState.modalChatOpen && <Modal typeModal="chat" cssModal={modalState.modalChatCss} handleClose={handleCloseModal} />}
      {modalState.modalContactOpen && <Modal typeModal="contact" cssModal={modalState.modalContactCss} handleClose={handleCloseModal} />}
    </div>
  );
}

export default App;