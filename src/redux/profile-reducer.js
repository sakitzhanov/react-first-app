const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        { id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2 },
        { id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5 },
        { id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47 }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    // if (action.type === ADD_POST) {
    //     const newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         likesCount: 0,
    //         dislikesCount: 0
    //     };
    
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }

    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                dislikesCount: 0
            };
        
            state.posts.push(newPost);
            state.newPostText = '';
            
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;