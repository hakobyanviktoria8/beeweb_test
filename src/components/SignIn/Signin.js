import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignIn.css"
import {connect} from "react-redux";
import {signIn} from "../../store/actions/authAction";
import {Redirect} from "react-router";

class Signin extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        const {authError, auth} = this.props
        if (auth.uid) return <Redirect to="/dashboard"/>

        return (
            <div className="SignInWrapper">
                <div className="SignIn">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="my-4">
                            <Label>Your Email</Label>
                            <Input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="my-4">
                            <Label>Your Password</Label>
                            <Input type="password" name="password" value={this.state.password}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <Button>Sign In</Button>
                        <p>{authError ? authError : null}</p>
                    </Form>
                    <div>
                        <span>I have no account </span>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)