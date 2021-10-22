const initState = {
    projects: [
        {id: 1, title: "First project", content: "This is my 1project content"},
        {id: 2, title: "Second project", content: "This is my 2project content"}
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "Create_Project":
            console.log("Create_Project", action.project)
            return state
        case "Create_Project_Error":
            console.log("Create_Project_Error", action.err)
            return state
        default:
            return state
    }
}

export default projectReducer