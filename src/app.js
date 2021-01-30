import React from "react";
import {browserRouter as Router, Switch} from "react-router-dom";
import {Route} from 'react-router-dom';
import { Home } from './pages';

export function App() {
    return (
        <div>
            <Home />
        </div>
    )
}