export const signUp = (newUser) => {
    // console.log("In signUp ", newUser)
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(() => {
            dispatch({type: "SignUp_Success"})
        }).catch((err) => {
            dispatch({type: "SignUp_Error", err})
        })
    }
}

export const signIn = (credentials) => {
    // console.log("In signin", credentials)
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "SignIn_Success"})
        }).catch((err) => {
            dispatch({type: "SignIn_Error", err})
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

