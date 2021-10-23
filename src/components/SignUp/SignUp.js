import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignUp.css"
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authAction";

class SignUp extends React.Component {
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
        console.log("SignUp state ", this.state);
        this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props
        if (auth.uid) return <Redirect to="/"/>

        return (
            <div className="SignUpWrapper">
                <div className="SignUp">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="my-4">
                            <Label>Your Email</Label>
                            <Input type="email" name="email" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="my-4">
                            <Label>Your Password</Label>
                            <Input type="password" name="password" onChange={this.handleChange}/>
                        </FormGroup>
                        <Button>Sign Up</Button>
                        <p>{authError ? authError : null}</p>
                    </Form>
                    <div>
                        <span>Already have an account </span>
                        <Link to="/signin">SignIn</Link>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)