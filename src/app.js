import React from "react";
import { Route, Switch} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import {Home, Jobinfo } from './pages';

export function App() {
    return (
        <>
            <Switch>
                   <Route path="/:jobInfo">
                       <Jobinfo />
                   </Route>
                   <Route exact path="/">
                      <Home />
                   </Route>
            </Switch>
        </>
    )
}