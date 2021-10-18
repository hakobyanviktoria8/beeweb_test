import React from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className="SignUpWrapper">
            <div className="SignUp">
                <Form>
                    <FormGroup className="my-4">
                        <Label for="exampleEmail">Your Email</Label>
                        <Input type="email" name="email" id="exampleEmail"/>
                    </FormGroup>
                    <FormGroup className="my-4">
                        <Label for="examplePassword">Your Password</Label>
                        <Input type="password" name="password" id="examplePassword"/>
                    </FormGroup>
                    <Button>Sign Up</Button>
                </Form>
                <div>
                    <span>Already have an account </span>
                    <Link to="/signin">SignIn</Link>
                </div>
            </div>
        </div>
    )
};

export default SignUp