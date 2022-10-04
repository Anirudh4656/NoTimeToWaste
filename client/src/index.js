import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
// import {App} from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect ,useState} from "react";
import { useLocation } from "react-router";
// import Register from "./Components/Register/register.jsx";
// import Access from "./Components/Access/access.jsx";
// import Link from "./Components/Link/link.jsx";
// import Deny from "./Components/Deny/deny.jsx";
// import End from "./Components/End/end.jsx";
// import AdminPortal from "./Components/AdminPortal/adminPortal.jsx";
// import AuthenticateUser from "./Components/AuthenticateUser/authenticateUser.jsx";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <Routing />
     
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

