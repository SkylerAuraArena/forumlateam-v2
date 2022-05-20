import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import ForumContextProvider from "./components/context/ForumContext";
import MainContextProvider from "./components/context/MainContext";
import AuthContextProvider from './components/context/AuthContext';
import ModalContextProvider from './components/context/ModalContext';
import FirebaseConnectionProvider from './components/context/FirebaseConnectionContext';

console.log("%cIndex.js", 'background: black; color: white;')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ForumContextProvider>
          <MainContextProvider>
            <ModalContextProvider>
              <FirebaseConnectionProvider>
                <App />
              </FirebaseConnectionProvider>
            </ModalContextProvider>
          </MainContextProvider>
        </ForumContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);