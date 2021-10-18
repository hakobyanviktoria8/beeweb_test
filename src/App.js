import React from "react"
import './App.css';
import {Nav, NavItem} from 'reactstrap';
import {Switch, Route, Link} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">
            <Nav className="Nav">
                <NavItem>
                    <Link to="/">Home</Link>
                    <Link to="/signup">SignUp</Link>
                </NavItem>
            </Nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={Signin}/>
            </Switch>
        </div>
    );
}

export default App;
