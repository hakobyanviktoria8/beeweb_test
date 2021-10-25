export const createPost = (post) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection("posts").add({
            ...post,
            createAt: new Date()
        }).then(() => {
            dispatch({type: "Create_Post", post})
        }).catch((err) => {
            dispatch({type: "Create_Post_Error", err})
        })

    }
}