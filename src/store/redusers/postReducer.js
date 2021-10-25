const initState = {}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case "Create_Post":
            console.log("Create_Post", action.post)
            return state
        case "Create_Post_Error":
            console.log("Create_Post_Error", action.err)
            return state
        default:
            return state
    }
}

export default postReducer