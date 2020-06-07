const initState = {
    projects : [ 
        {id: '1', title: 'Help me find Peach', content: "He's in another castle..."},
        {id: '2', title: 'Collect all the stars', content: "Let's get all of them."},
        {id: '3', title: 'Egg hunt with Yoshi', content: "Gotta catch'em all!"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default: return state;
    }
}

export default projectReducer;