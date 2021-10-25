import React from "react"
import './App.css';
import {Switch, Route} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/beeweb_test" component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default App;
