
const initialState = {
    projects: [
        { id: 1, title: 'help me find peach', content: 'Blah blah blah' },
        { id: 2, title: 'help me find peach', content: 'Blah blah blah' },
        { id: 3, title: 'help me find peach', content: 'Blah blah blah' }
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("Error ", action.err)
            return state;
        default:
            return state;
    }
    return state;
}

export default projectReducer;