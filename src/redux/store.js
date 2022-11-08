import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }   
}

export default store;
window.store = store;