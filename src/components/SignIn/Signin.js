import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignIn.css"

const Signin = () => {
    return (
        <div className="SignInWrapper">
            <div className="SignIn">
                <Form>
                    <FormGroup className="my-4">
                        <Label for="exampleEmail">Your Email</Label>
                        <Input type="email" name="email" id="exampleEmail"/>
                    </FormGroup>
                    <FormGroup className="my-4">
                        <Label for="examplePassword">Your Password</Label>
                        <Input type="password" name="password" id="examplePassword"/>
                    </FormGroup>
                    <Button>Sign In</Button>
                </Form>
                <div>
                    <span>I have no account </span>
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </div>
    )
};

export default Signin