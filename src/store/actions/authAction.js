export const signIn = (credentials) => {
    console.log("In signin", credentials)
    return (dispatch, getState, {getFirebase}) => {
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

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signOut()
            .then(() => {
                dispatch({type: "SignOut_Success"})
            }).catch((err) => {
            dispatch({type: "SignOut_Error", err})
        })
    }
}