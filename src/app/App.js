import React from 'react';
import {LandingPage, About} from '../pages';
import {NavBar, Footer} from '../layout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <LandingPage/> 
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}
