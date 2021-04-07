import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const App = () => (
    <div className="layout">
        <Header/>
        <div className={"info-msg"}>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
            </Switch>
        </div>
    </div>
);

export default App;
