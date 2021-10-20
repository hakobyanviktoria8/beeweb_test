import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
    const [email1, setEmail1] = useState("")
    const [password1, setPassword1] = useState("")

    const handleChangeEmail = (e) => {
        setEmail1(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword1(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email1, password1)
    }

    return (
        <div className="SignUpWrapper">
            <div className="SignUp">
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="my-4">
                        <Label for="exampleEmail">Your Email</Label>
                        <Input type="email" name="email" value={email1} onChange={handleChangeEmail}/>
                    </FormGroup>
                    <FormGroup className="my-4">
                        <Label for="examplePassword">Your Password</Label>
                        <Input type="password" name="password" value={password1} onChange={handleChangePassword}/>
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