import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './global-styles';
import ReactDOM from "react-dom";
import { App } from "./app";
import { ContextProvider } from "./context";


ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
            <GlobalStyles />
        </Router>
    </ContextProvider>,
    document.getElementById("root")
);