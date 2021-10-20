const initState = {
    projects: [
        {id: 1, title: "First project", content: "This is my 1project content"},
        {id: 2, title: "Second project", content: "This is my 2project content"}
    ]
}
const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer