import { rerenderEntireTree } from "../render";

const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2 },
            { id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5 },
            { id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47 }
        ],
        postText: ''
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi!', isMine: false },
            { id: 2, message: 'Whats up?', isMine: true },
            { id: 3, message: 'What u doin?', isMine: false },
            { id: 4, message: 'Chilling =/', isMine: true },
            { id: 5, message: 'Call me back', isMine: false }
        ],
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

export const addPost = (postMessage) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        dislikesCount: 0
    };

    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state);
}

export const changePostText = (text) => {
    state.profilePage.postText = text;

    rerenderEntireTree(state);
}

export default state;