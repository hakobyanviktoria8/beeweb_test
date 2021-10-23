const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SignUp_Error":
            console.log("SignUp Error");
            return {
                ...state,
                authError: "Sign Up failed"
            }
        case "SignUp_Success":
            console.log("SignUp Success");
            return {
                ...state,
                authError: null
            }
        case "SignIn_Error":
            console.log("SignIn error");
            return {
                ...state,
                authError: "Sign In failed"
            }
        case "SignIn_Success":
            console.log("SignIn Success");
            return {
                ...state,
                authError: null
            }
        case "SignOut_Error":
            console.log("SignOut Error");
            return state
        case "SignOut_Success":
            console.log("SignOut Success");
            return state
        default:
            return state
    }
}

export default authReducer