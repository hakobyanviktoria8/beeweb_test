import React from "react";
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authAction";

const NavBar = (props) => {
    const {auth} = props
    // console.log(auth)

    return (
        <Nav className="Nav">
            <NavItem>
                <Link to="/">Home</Link>
                {auth.uid ?
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/" onClick={props.signOut}>SignOut</Link>
                    </>
                    :
                    <Link to="/signup">SignUp</Link>
                }
            </NavItem>
        </Nav>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)