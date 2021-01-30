import React from "react";
import { GlobalStyles } from './global-styles';
import ReactDOM from "react-dom";
import { App } from "./app";


ReactDOM.render(
    <div>
        <App />
        <GlobalStyles />
    </div>,
    document.getElementById("root")
);