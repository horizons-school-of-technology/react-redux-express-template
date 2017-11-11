function postsReducer(state = [], action) {
    console.log('here 3', state, action);
    switch (action.type) {
        case 'GET_POSTS':
            let newState = [...state];
            newState = action.posts;
            return newState;
        default:
            return state;
    }
}

export default postsReducer;
