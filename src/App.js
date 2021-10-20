import React from "react"
import './App.css';
import {Nav, NavItem} from 'reactstrap';
import {Switch, Route, Link} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
// import {auth, provider} from "./firebase";
// import {useDispatch, useSelector} from "react-redux";
// import {setActiveUser, setUserLogOutState, selectUserName, selectUserEmail} from "./context/userSlice";

function App() {
    // const dispatch = useDispatch()
    // const userName = useSelector(selectUserName)
    // const userEmail = useSelector(selectUserEmail)

    return (
        <div className="App">
            <Nav className="Nav">
                <NavItem>
                    <Link to="/">Home</Link>
                    <Link to="/signup">SignUp</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </NavItem>
            </Nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
            {/*{userName ?*/}
            {/*    <button disabled>SignOut</button>*/}
            {/*    :*/}
            {/*    <button disabled>SignIn</button>*/}
            {/*}*/}
        </div>
    );
}

export default App;
