const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2 },
                { id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5 },
                { id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi!', isMine: false },
                { id: 2, message: 'Whats up?', isMine: true },
                { id: 3, message: 'What u doin?', isMine: false },
                { id: 4, message: 'Chilling =/', isMine: true },
                { id: 5, message: 'Call me back', isMine: false }
            ],
            newMessageText: '',
            dialogs: [
                { id: 1, name: 'Asset', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
                { id: 2, name: 'Alua', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
                { id: 3, name: 'Temirlan', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
                { id: 4, name: 'Tair', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' }
            ]
        },
        navbar: {
            friends: [
                { id: 10, name: 'Mira', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
                { id: 11, name: 'Altynai', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' },
                { id: 12, name: 'Gaziz', profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' }
            ]
        }        
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                dislikesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
                isMine: true
            }
        
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }   
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default store;
window.store = store;