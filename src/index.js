import React from "react";
import ReactDOM from "react-dom/client";
//import Kakao from './proj_4/Kakao';
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/global.style";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
