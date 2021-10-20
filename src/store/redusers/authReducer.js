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
        default:
            return state
    }
}

export default authReducer