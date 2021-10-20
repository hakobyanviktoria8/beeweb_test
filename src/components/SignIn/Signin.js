import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignIn.css"
import {connect} from "react-redux";
import {signIn} from "../../store/actions/authAction";

const Signin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        signIn({email, password})()
    }
    return (
        <div className="SignInWrapper">
            {console.log(props)}
            <div className="SignIn">
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="my-4">
                        <Label for="exampleEmail">Your Email</Label>
                        <Input type="email" name="email" value={email} onChange={handleChangeEmail}/>
                    </FormGroup>
                    <FormGroup className="my-4">
                        <Label for="examplePassword">Your Password</Label>
                        <Input type="password" name="password" password={password} onChange={handleChangePassword}/>
                    </FormGroup>
                    <Button>Sign In</Button>
                    <p>{props.authError ? props.authError : "Message here"}</p>
                </Form>
                <div>
                    <span>I have no account </span>
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)