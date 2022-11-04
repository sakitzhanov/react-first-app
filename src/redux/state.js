let rerenderEntireTree = () => {
    console.log('State was changed');
}

const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2 },
            { id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5 },
            { id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47 }
        ],
        newPostText: 'LOL'
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi!', isMine: false },
            { id: 2, message: 'Whats up?', isMine: true },
            { id: 3, message: 'What u doin?', isMine: false },
            { id: 4, message: 'Chilling =/', isMine: true },
            { id: 5, message: 'Call me back', isMine: false }
        ],
        newMessageText: '[]',
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
}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
        dislikesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const sendMessage = () => {
    const newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
        isMine: true
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;