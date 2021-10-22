export const createProject = (project) => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        const firestore= getFirestore()
        firestore.collection("projects").add({
            ...project,
            createAt:new Date()
        }).then(()=>{
            dispatch({type:"Create_Project",project})
        }).catch((err)=>{
            dispatch({type:"Create_Project_Error",err})
        })

    }
}