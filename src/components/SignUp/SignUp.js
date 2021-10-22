import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
    const [email1, setEmail1] = useState("")
    const [password1, setPassword1] = useState("")
    const [confirmPassword1, setConfirmPassword1] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleChangeEmail = (e) => {
        setEmail1(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword1(e.target.value)
    }
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword1(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (confirmPassword1 === password1){
            console.log(email1, password1, confirmPassword1)
        } else {
            setErrorMessage("Password and Confirm Password do not match")
        }
    }

    return (
        <div className="SignUpWrapper">
            <div className="SignUp">
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="my-4">
                        <Label>Your Email</Label>
                        <Input type="email" name="email" value={email1} onChange={handleChangeEmail}/>
                    </FormGroup>
                    <FormGroup className="my-4">
                        <Label>Your Password</Label>
                        <Input type="password" name="password" value={password1} onChange={handleChangePassword}/>
                    </FormGroup>
                    <FormGroup className="my-4">
                        <Label>Confirm Password</Label>
                        <Input type="password" name="confirmPassword" value={confirmPassword1}
                               onChange={handleChangeConfirmPassword}/>
                    </FormGroup>
                    <p>{errorMessage}</p>
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