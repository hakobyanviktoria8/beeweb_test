const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "Login_Error":
            console.log("Login error");
            return {
                ...state,
                authError: "Login failed"
            }
        case "Login_Success":
            console.log("Login Success");
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