export const signIn = (credentials) => {
    console.log("In signin")
    return (dispatch, getState, {getFirebase}) => {
        console.log("Herre")
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "Login_Success"})
        }).catch((err) => {
            dispatch({type: "Login_Error", err})
        })
    }
}